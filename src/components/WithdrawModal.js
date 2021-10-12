import { useState } from "react";
import ETH_logo from "../assets/asset_ETH.svg";
import winning from "../assets/online-cryptocurrency-exchange-3327982-2793773.webp";

export default function WithdrawModal({ close, currentDeposit }) {
  const [isStartTrans, setIsStartTrans] = useState(true);
  const [amount, setAmount] = useState(null);

  return (
    <div
      onClick={() => setIsStartTrans(false)}
      className={
        "fixed w-screen h-screen inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm " +
        (isStartTrans ? "animate-fadeInBlur" : "animate-fadeOutBlur")
      }
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={
          "rounded-lg bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 shadow-2xl py-10 px-16 flex flex-col items-center " +
          (isStartTrans ? "animate-moveUp" : "animate-moveDown")
        }
        onAnimationEnd={(e) => (isStartTrans ? null : close())}
      >
        <img src={ETH_logo} className="w-14" />
        <div className="text-white font-semibold text-xl mt-2">
          Withdraw from the ETH Pool
        </div>
        <img src={winning} className="w-64 mt-6" />
        <div className="w-full text-accent">Amount</div>
        <input
          type="number"
          autoFocus
          min="0"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          className="outline-none ring rounded-full pl-4 py-1 bg-purple-900 text-white text-3xl mt-2"
        />
        <div className="flex justify-between items-center w-full mt-6">
          <div className="ml-7">
            <div className="text-xs font-light text-secondary">
              Your remaining deposit:
            </div>
            <div className="text-xl bg-clip-text text-transparent bg-rainbow-gradient animate-flashy-text">
              ${Math.max(currentDeposit - amount, 0).toLocaleString()}
            </div>
          </div>
          <div className="rounded-full border-2 border-accent px-8 py-1 text-xl text-accent font-semibold cursor-pointer hover:bg-accent hover:text-primary">
            Continue
          </div>
        </div>
      </div>
    </div>
  );
}
