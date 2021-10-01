import Header from "./components/Header";
import USDC_image from "./assets/USDC.png";
import { ReactComponent as Chevron } from "./assets/001-chevron.svg";

function App() {
  return (
    <div className="min-h-screen bg-primary font-primary">
      <Header />
      <div className="flex justify-between items-center px-5">
        <div className="flex items-center">
          <img src={USDC_image} className="w-16" />
          <div className="ml-8">
            <div className="flex items-center">
              <div className="text-3xl font-bold text-secondary">USDC Coin</div>
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
    </div>
  );
}

export default App;
