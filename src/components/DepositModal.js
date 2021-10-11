import { useState } from "react";
import USDC_image from "../assets/USDC.png";
import winning from "../assets/online-cryptocurrency-exchange-3327982-2793773.webp";
import main from "../utils/compound_ETH";

export default function DepositModal({ close, depositAmount }) {
  const [isStartTrans, setIsStartTrans] = useState(true);
  const [amount, setAmount] = useState(null);

  const supplyToCompound = () => {
    main();
  }

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
        <img src={USDC_image} className="w-14" />
        <div className="text-white font-semibold text-xl mt-2">
          Deposit into the USDC Pool
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
              Your winning odds:
            </div>
            <div className="text-xl bg-clip-text text-transparent bg-rainbow-gradient animate-flashy-text">
              1 in {Math.round((depositAmount / amount) * 100) / 100}
            </div>
          </div>
          <button onClick= {supplyToCompound} className="rounded-full border-2 border-accent px-8 py-1 text-xl text-accent font-semibold cursor-pointer hover:bg-accent hover:text-primary">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
