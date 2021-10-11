const Web3 = require('web3');

const web3 = new Web3('');

// Your Ethereum wallet private key
const privateKey = '';

// Add your Ethereum wallet to the Web3 object
web3.eth.accounts.wallet.add('0x' + privateKey);
const myWalletAddress = web3.eth.accounts.wallet[0].address;
console.log(myWalletAddress);

// Main Net Contract for cETH (the supply process is different for cERC20 tokens)
//const contractAddress = '0xd6801a1dffcd0a410336ef88def4320d6df1883e';

//rinkeby cETH address:
const contractAddress = '0xd6801a1dffcd0a410336ef88def4320d6df1883e';

const abiJson = require("./cETH_rink_abi.json");

const cEthContract = new web3.eth.Contract(abiJson, contractAddress);

const ethDecimals = 18; // Ethereum has 18 decimal places

const main = async function() {
  let ethBalance = await web3.eth.getBalance(myWalletAddress) / Math.pow(10, ethDecimals);
  console.log("My wallet's ETH balance:", ethBalance, '\n');

  console.log('Supplying ETH to the Compound Protocol...', '\n');
  // Mint some cETH by supplying ETH to the Compound Protocol
  
  await cEthContract.methods.mint().send({
    from: myWalletAddress,
    gasLimit: web3.utils.toHex(150000),
    gasPrice: web3.utils.toHex(20000000000), // use ethgasstation.info (mainnet only)
    value: web3.utils.toHex(web3.utils.toWei('12', 'finney'))
  });

  console.log('cETH "Mint" operation successful.', '\n');

  const balanceOfUnderlying = web3.utils.toBN(await cEthContract.methods
    .balanceOfUnderlying(myWalletAddress).call()) / Math.pow(10, ethDecimals);

  console.log("ETH supplied to the Compound Protocol:", balanceOfUnderlying, '\n');

  let cTokenBalance = await cEthContract.methods.balanceOf(myWalletAddress).call() / 1e8;

  console.log("My wallet's cETH Token Balance:", cTokenBalance, '\n');

  let exchangeRateCurrent = await cEthContract.methods.exchangeRateCurrent().call();
  exchangeRateCurrent = exchangeRateCurrent / Math.pow(10, 18 + ethDecimals - 8);
  console.log("Current exchange rate from cETH to ETH:", exchangeRateCurrent, '\n');

  console.log('Redeeming the cETH for ETH...', '\n');

  console.log('Exchanging all cETH based on cToken amount...', '\n');
  await cEthContract.methods.redeem(cTokenBalance * 1e8).send({
    from: myWalletAddress,
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

  cTokenBalance = await cEthContract.methods.balanceOf(myWalletAddress).call() / 1e8;
  console.log("My wallet's cETH Token Balance:", cTokenBalance);

  ethBalance = await web3.eth.getBalance(myWalletAddress) / Math.pow(10, ethDecimals);
  console.log("My wallet's ETH balance:", ethBalance, '\n');
}

main().catch((err) => {
  console.error(err);
});
