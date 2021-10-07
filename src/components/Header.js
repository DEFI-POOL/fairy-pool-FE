import { useState } from "react";
import { ReactComponent as SettingsIcon } from "../assets/001-settings.svg";
import logo from "../assets/logo.png";
import Web3 from "web3";
import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected } from "../utils/wallet";

export default function Header() {
   //State variables
   const [walletAddress, setWallet] = useState("");
   const [status, setStatus] = useState("");

  useEffect(async () => {
    const {address, status} = await getCurrentWalletConnected();
    setWallet(address)
    setStatus(status);

    addWalletListener();
  }, []);

  // connect wallet 
  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  // wallet listener to update UI when wallet's state changes, 
  // such as when the user disconnects or switches accounts.
  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("You're all set!!! Deposit! Win pool interest! Never Lose!");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the 'Connect wallet' button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
          Please, follow this link to quickly set up metamask, a virtual Ethereum wallet.
          </a>
        </p>
      );
    }
  }


  return (
    <div className="h-16 px-5 flex justify-between items-center pt-8">
      <div className="flex items-center">
        <img
          src={logo}
          className="w-10 mr-3"
          style={{
            filter:
              "invert(27%) sepia(46%) saturate(3914%) hue-rotate(314deg) brightness(88%) contrast(96%)",
          }}
        />
        <div className="text-4xl font-bold bg-gradient-to-b from-pink-400 to-pink-700 bg-clip-text text-transparent">
          Fairy Pool
        </div>
      </div>
      <div className="flex justify-between items-center">
          <div className="text-sm text-secondary font-semibold"></div>
        
          <div
            className="rounded-full border-2 border-accent px-6 py-1 text-sm text-accent font-semibold cursor-pointer hover:bg-accent hover:text-primary"
          >
            Connect Wallet
          </div>
        <SettingsIcon className="w-5 ml-3 cursor-pointer fill-accent" />
      </div>
    </div>
  );
}
