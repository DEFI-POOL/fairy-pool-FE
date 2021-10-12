import { useState } from "react";
import Header from "./components/Header";
import ETH_logo from "./assets/asset_ETH.svg";
import { ReactComponent as Chevron } from "./assets/001-chevron.svg";
import Countdown from "./components/Countdown";
import prize_img from "./assets/wallet-dev.png";
import yield_logo from "./assets/yield_logo.png";
import DepositModal from "./components/DepositModal";
import WithdrawModal from "./components/WithdrawModal";

export const truncate = (fullStr, strLen, separator) => {
  if (fullStr.length <= strLen) return fullStr;

  separator = separator || "...";

  var sepLen = separator.length,
    charsToShow = strLen - sepLen,
    frontChars = Math.ceil(charsToShow / 2),
    backChars = Math.floor(charsToShow / 2);

  return (
    fullStr.substr(0, frontChars) +
    separator +
    fullStr.substr(fullStr.length - backChars)
  );
};

function App() {
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);

  const prizeSplit = [25000, 11105, 11105, 11105, 11105];

  const genRandomTx = (len) => {
    const genRandomString = (strLen) => {
      let result = "";
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let charactersLength = characters.length;
      for (let i = 0; i < strLen; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    };

    let txs = [];
    for (let i = 0; i < len; i++) {
      const tx = {
        address: "0x" + genRandomString(40),
        amount: Math.floor(Math.random() * 50000),
      };
      console.log(tx.address);
      txs.push(tx);
    }

    return txs;
  };

  return (
    <div className="min-h-screen font-primary pb-20">
      <Header />
      <div className="px-64 mt-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={ETH_logo} className="w-14" />
            <div className="ml-4">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-secondary">Ether</div>
                <div className="rounded-full bg-blue-900 text-accent text-xs font-semibold ml-2 px-2 py-0.5">
                  Weekly prize
                </div>
              </div>
              <div className="text-secondary text-sm">
                POOLS
                <Chevron className="inline-block w-2.5 fill-secondary align-baseline mx-1" />
                ETHEREUM
                <Chevron className="inline-block w-2.5 fill-secondary align-baseline mx-1" />
                ETH POOL
              </div>
            </div>
          </div>
          <div
            onClick={() => setShowDepositModal(true)}
            className={
              "rounded-full border-2 border-accent text-2xl px-16 py-2 font-semibold cursor-pointer hover:bg-accent hover:text-primary " +
              (showDepositModal ? "bg-accent text-primary" : "text-accent")
            }
          >
            Deposit
          </div>
        </div>
        <div className="mt-8 rounded-lg shadow-2xl bg-gradient-to-r from-pink-600 to-purple-800 overflow-hidden">
          <div className="flex justify-between items-center px-14 py-8 bg-shiny-gradient animate-shine">
            <div>
              <div className="text-secondary">Prize #96</div>
              <div className="text-white text-5xl font-semibold">$69,420</div>
            </div>
            <div>
              <div className="text-secondary text-lg mb-2 font-extralight">
                Will be awarded
              </div>
              <Countdown
                countDownDate={new Date("Oct 12, 2021 15:37:25").getTime()}
              />
            </div>
          </div>
        </div>
        <div className="my-5 bg-clip-border bg-gray-400">
          <hr className="border-opacity-0" />
        </div>
        <div className="rounded-lg shadow-2xl px-8 py-4 flex justify-between items-center bg-purple-600">
          <div>
            <div className="text-secondary">Your deposit</div>
            <div className="text-white text-3xl font-semibold">$435</div>
          </div>
          <div
            onClick={() => setShowWithdrawModal(true)}
            className={
              "rounded-full border-2 border-accent text-xl px-8 py-2 font-semibold cursor-pointer hover:bg-accent hover:text-primary " +
              (showWithdrawModal ? "bg-accent text-primary" : "text-accent")
            }
          >
            Withdraw
          </div>
        </div>
        <div className="mt-8 rounded-lg bg-purple-900 p-8">
          <div className="text-white text-center font-semibold text-2xl mb-1">
            ETH Prize #96
          </div>
          <div className="text-secondary text-center font-light mb-5">
            Prize split between {prizeSplit.length} winners
          </div>
          <div className="flex flex-col	items-center mb-8">
            <img src={prize_img} className="w-80" />
            <div className="text-white text-4xl font-semibold">$69,420</div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-xl font-light bg-clip-text text-transparent bg-rainbow-gradient animate-flashy-text">
              Grand winner:
            </div>
            <div className="text-xl bg-clip-text text-transparent bg-rainbow-gradient animate-flashy-text">
              ${prizeSplit[0].toLocaleString()}
            </div>
          </div>
          <div className="my-3 bg-clip-border bg-pink-600">
            <hr className="border-opacity-0" />
          </div>
          {prizeSplit.slice(1).map((prize) => (
            <div className="flex justify-between items-center mt-4">
              <div className="text-secondary text-xl font-light">
                Runner up:
              </div>
              <div className="text-white text-xl">
                ${prize.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-lg bg-purple-900 p-8">
          <div className="text-white font-semibold text-2xl mb-8">
            Pool stats
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-secondary text-xl font-light">
              Total deposits:
            </div>
            <div className="text-white text-xl">$54,330</div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-secondary text-xl font-light">
              Yield source:
            </div>
            <div className="flex items-center">
              <img src={yield_logo} className="w-7 mr-2 inline-block" />
              <div className="text-white text-xl">Compound Finance</div>
            </div>
          </div>
          <div className="bg-clip-border bg-pink-600 mt-4">
            <hr className="border-opacity-0" />
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-secondary text-xl font-light">
              Effective APR:
            </div>
            <div className="text-white text-xl">6.69%</div>
          </div>
        </div>
        <div className="mt-8 rounded-lg bg-purple-900 p-8">
          <div className="text-secondary">DEPOSITORS</div>
          <div className="text-white font-semibold text-5xl mb-8">495</div>
          <table className="w-full text-left">
            <tr>
              <th className="text-white font-semibold">Address</th>
              <th className="text-white font-semibold">Deposit</th>
            </tr>
            {genRandomTx(5).map((tx) => (
              <tr>
                <td className="text-white font-extralight text-xl">
                  {truncate(tx.address, 13)}
                </td>
                <td className="text-white font-extralight text-xl">
                  ${tx.amount.toLocaleString()}
                </td>
                <td className="text-secondary font-light text-right cursor-pointer hover:text-white">
                  View Tx
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      {showDepositModal && (
        <DepositModal
          close={() => setShowDepositModal(false)}
          depositAmount={69420}
        />
      )}
      {showWithdrawModal && (
        <WithdrawModal
          close={() => setShowWithdrawModal(false)}
          currentDeposit={435}
        />
      )}
    </div>
  );
}

export default App;
