const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');


const provider = new HDWalletProvider(
 'mnemonic redacted'
  'https://rinkeby.infura.io/v3/050add6623a44cfa8e18696920f181e4'
)

const web3 = new Web3(provider);

// Your Ethereum wallet private key
const privateKey = 'private key redacted';

// Add your Ethereum wallet to the Web3 object
web3.eth.accounts.wallet.add('0x' + privateKey);
const depositReserve = web3.eth.accounts.wallet[0].address;
console.log(depositReserve);

//rinkeby cETH address:
const compoundAddress = '0xd6801a1dffcd0a410336ef88def4320d6df1883e';

const abiJson = require("./cETH_rink_abi.json");

const cEthContract = new web3.eth.Contract(abiJson, compoundAddress);

const ethDecimals = 18; // Ethereum has 18 decimal places



const depositTocompound = async function() {


  let ethBalance = await web3.eth.getBalance(depositReserve) / Math.pow(10, ethDecimals);
  console.log("My wallet's ETH balance:", ethBalance, '\n');

  console.log('Supplying ETH to the Compound Protocol...', '\n');
  // Mint some cETH by supplying ETH to the Compound Protocol
  
  await cEthContract.methods.mint().send({
    from: depositReserve,
    gasLimit: web3.utils.toHex(150000),
    gasPrice: web3.utils.toHex(20000000000), // use ethgasstation.info (mainnet only)
    value: web3.utils.toHex(web3.utils.toWei('2', 'ether'))
  });

  console.log('cETH "Mint" operation successful.', '\n');

  const balanceOfUnderlying = web3.utils.toBN(await cEthContract.methods
    .balanceOfUnderlying(depositReserve).call()) / Math.pow(10, ethDecimals);

  console.log("ETH supplied to the Compound Protocol:", balanceOfUnderlying, '\n');

  let cTokenBalance = await cEthContract.methods.balanceOf(depositReserve).call() / 1e8;

  console.log("My wallet's cETH Token Balance:", cTokenBalance, '\n');

  console.log("Called successfully");
}


const withdrawal = async () => {
  let exchangeRateCurrent = await cEthContract.methods.exchangeRateCurrent().call();
  exchangeRateCurrent = exchangeRateCurrent / Math.pow(10, 18 + ethDecimals - 8);
  console.log("Current exchange rate from cETH to ETH:", exchangeRateCurrent, '\n');

  let cTokenBalance = await cEthContract.methods.balanceOf(depositReserve).call() / 1e8;

  console.log('Redeeming the cETH for ETH...', '\n');

  console.log('Exchanging all cETH based on cToken amount...', '\n');
  await cEthContract.methods.redeem(cTokenBalance * 1e8).send({
    from: depositReserve,
    gasLimit: web3.utils.toHex(500000),
    gasPrice: web3.utils.toHex(20000000000), // use ethgasstation.info (mainnet only)
  });

  // console.log('Exchanging all cETH based on underlying ETH amount...', '\n');
  // let ethAmount = web3.utils.toWei(balanceOfUnderlying).toString()
  // await cEthContract.methods.redeemUnderlying(ethAmount).send({
  //   from: myWalletAddress,
  //   gasLimit: web3.utils.toHex(150000),
  //   gasPrice: web3.utils.toHex(20000000000), // use ethgasstation.info (mainnet only)
  // });

  cTokenBalance = await cEthContract.methods.balanceOf(depositReserve).call() / 1e8;
  console.log("My wallet's cETH Token Balance:", cTokenBalance);

  let ethBalance = await web3.eth.getBalance(depositReserve) / Math.pow(10, ethDecimals);

  ethBalance = await web3.eth.getBalance(depositReserve) / Math.pow(10, ethDecimals);
  console.log("My wallet's ETH balance:", ethBalance, '\n');
}

export { depositTocompound, withdrawal };