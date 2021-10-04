import Header from "./components/Header";
import USDC_image from "./assets/USDC.png";
import { ReactComponent as Chevron } from "./assets/001-chevron.svg";
import Countdown from "./components/Countdown";
import prize_img from "./assets/wallet-dev.png";

function App() {
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

  const truncate = (str, maxChar) => {
    return str.length > maxChar + 3 ? str.substring(0, maxChar) + "..." : str;
  };

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
                <div className="rounded-full bg-blue-900 text-accent text-xs font-semibold ml-2 px-2 py-0.5">
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
          <div className="rounded-full border-2 border-accent text-2xl text-accent px-16 py-2 font-semibold cursor-pointer hover:bg-accent hover:text-primary">
            Deposit
          </div>
        </div>
        <div className="mt-8 rounded-lg shadow-2xl bg-gradient-to-r from-pink-600 to-purple-800 flex justify-between items-center px-14 py-8">
          <div>
            <div className="text-secondary">Prize #96</div>
            <div className="text-white text-5xl font-semibold">$69,420</div>
          </div>
          <div>
            <div className="text-secondary text-lg mb-2 font-extralight">
              Will be awarded
            </div>
            <Countdown
              countDownDate={new Date("Oct 5, 2021 15:37:25").getTime()}
            />
          </div>
        </div>
        <div className="mt-8 rounded-lg bg-purple-900 p-8">
          <div className="text-white text-center font-semibold text-2xl mb-1">
            USDC Prize #96
          </div>
          <div className="text-secondary text-center font-light mb-5">
            Prize split between {prizeSplit.length} winners
          </div>
          <div className="flex flex-col	items-center mb-8">
            <img src={prize_img} className="w-80" />
            <div className="text-white text-4xl font-semibold">$69,420</div>
          </div>
          {prizeSplit.map((prize, index) => (
            <>
              <div className="flex justify-between items-center mt-4">
                <div className="text-secondary text-xl font-light">
                  {index === 0 ? "Grand winner:" : "Runner up:"}
                </div>
                <div className="text-white text-xl">
                  ${prize.toLocaleString()}
                </div>
              </div>
              {index === 0 ? (
                <div className="my-3 bg-clip-border bg-pink-600">
                  <hr className="border-opacity-0" />
                </div>
              ) : null}
            </>
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
            <div className="text-white text-xl">Uniswap</div>
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
                <td className="text-white font-light text-xl">
                  {truncate(tx.address, 10)}
                </td>
                <td className="text-white font-light text-xl">
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
    </div>
  );
}

export default App;
