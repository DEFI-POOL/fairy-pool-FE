import { useState, useEffect } from "react";
import { ReactComponent as SettingsIcon } from "../assets/001-settings.svg";
import logo from "../assets/logo.png";
import Web3 from "web3";
import { truncate } from "../App.js";

export default function Header() {
  const [ethAdd, setEthAdd] = useState(null);
  const [metaMaskStatus, setMetaMaskStatus] = useState(true);

  const checkWallet = async () => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    return accounts.length > 0;
  };

  const connectWallet = async () => {
    const userAdd = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setEthAdd(userAdd[0]);
    const web3 = new Web3(window.ethereum);
  };

  useEffect(async () => {
    if (window.ethereum) {
      if (await checkWallet()) {
        connectWallet();
      }
    } else {
      setMetaMaskStatus(false);
    }
  }, []);

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
        <div
          onClick={
            metaMaskStatus
              ? ethAdd
                ? null
                : connectWallet
              : () => window.open("https://metamask.io/")
          }
          className="rounded-full border-2 border-accent px-6 py-1 text-sm text-accent font-semibold cursor-pointer hover:bg-accent hover:text-primary"
        >
          {metaMaskStatus
            ? ethAdd
              ? "Connected: " + truncate(ethAdd, 13)
              : "Connect Wallet"
            : "Install MetaMask 🦊"}
        </div>
        <SettingsIcon className="w-5 ml-3 cursor-pointer fill-accent" />
      </div>
    </div>
  );
}
