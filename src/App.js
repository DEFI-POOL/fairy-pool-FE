import "./App.css";
import Header from "./components/Header";
import USDC_image from "./assets/USDC.png";

function App() {
  return (
    <div className="min-h-screen bg-primary font-primary">
      <Header />
      <div className="flex justify-between items-center px-5">
        <div className="flex justify-between items-center">
          <img src={USDC_image} className="w-16" />
          <div className="flex flex-col">
            <div className="flex-1">USDC Coin</div>
            <div className="flex-1">POOLS // ETHEREUM // USDC POOL</div>
          </div>
        </div>
        <div className="rounded-full border-2 border-secondary text-2xl text-secondary px-16 py-2 font-black cursor-pointer">
          Deposit
        </div>
      </div>
    </div>
  );
}

export default App;
