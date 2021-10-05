import USDC_image from "../assets/USDC.png";

export default function DepositModal({ close }) {
  return (
    <div
      onClick={close}
      className="fixed w-screen h-screen inset-0 backdrop-blur-sm backdrop-filter flex items-center justify-center"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="rounded-lg bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 shadow-2xl py-10 px-16 flex flex-col items-center"
      >
        <img src={USDC_image} className="w-14" />
        <div className="text-white font-primary font-semibold text-xl mt-2">
          Deposit into the USDC Pool
        </div>
        <div className="w-full mt-16 font-primary text-accent">Amount</div>
        <input
          type="number"
          autoFocus
          className="outline-none ring rounded-full pl-2 py-1 bg-purple-900 text-white font-primary text-3xl mt-2"
        />
        <div className="rounded-full border-2 border-accent px-8 py-1 text-xl text-accent font-semibold font-primary cursor-pointer hover:bg-accent hover:text-primary mt-8">
          Continue
        </div>
      </div>
    </div>
  );
}
