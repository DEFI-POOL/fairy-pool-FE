import Header from "./components/Header";
import USDC_image from "./assets/USDC.png";
import { ReactComponent as Chevron } from "./assets/001-chevron.svg";
import Countdown from "./components/Countdown";

function App() {
  return (
    <div className="min-h-screen bg-primary font-primary">
      <Header />
      <div className="px-64 mt-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={USDC_image} className="w-14" />
            <div className="ml-8">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-secondary">
                  USDC Coin
                </div>
                <div className="rounded-full bg-blue-900 text-accent text-xs font-black ml-2 px-2 py-0.5">
                  Weekly prize
                </div>
              </div>
              <div className="text-secondary text-sm">
                POOLS
                <Chevron className="inline-block w-2.5 fill-secondary align-baseline mx-1" />
                ETHEREUM
                <Chevron className="inline-block w-2.5 fill-secondary align-baseline mx-1" />
                USDC POOL
              </div>
            </div>
          </div>
          <div className="rounded-full border-2 border-accent text-2xl text-accent px-16 py-2 font-black cursor-pointer">
            Deposit
          </div>
        </div>
        <div className="mt-8 rounded-lg shadow-2xl bg-gradient-to-r from-pink-600 to-purple-800 flex justify-between items-center px-14 py-8">
          <div>
            <div className="text-secondary">Prize #96</div>
            <div className="text-white text-5xl font-bold">$69,420</div>
          </div>
          <div>
            <div className="text-secondary text-xl mb-2 font-thin">
              Will be awarded
            </div>
            <Countdown
              countDownDate={new Date("Oct 5, 2021 15:37:25").getTime()}
            />
          </div>
        </div>
        <div className="mt-8 rounded-lg bg-purple-900 px-8 py-8">
          <div className="text-white font-extrabold text-2xl mb-8">
            Pool's stats
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-secondary text-xl">Total deposits</div>
            <div className="text-secondary text-xl">$54,330</div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-secondary text-xl">Yield source</div>
            <div className="text-secondary text-xl">Uniswap</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
