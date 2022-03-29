import React from 'react';
const Web3 = require("web3");
const ethers = require("ethers");

const testPortfolioABI = require("./testPortfolioABI.json");
const testPortfolioAddress = "0x7157Ea1F87Cc4CbeE63137D3CB5ecBd44eE1960a"
const testPortfolio = new Web3.eth.Contract(
  testPortfolioABI,
  testPortfolioAddress
);

// Input the mnemonic for your wallet
const mnemonicPhrase = "decrease hurdle betray happy asthma scatter muffin follow gauge dismiss load ball
";
const myWallet = ethers.Wallet.fromMnemonic(mnemonicPhrase);

// Connect to Rinkeby (may be other ways to do this than Infura)
const infuraId = "1c722de80b77412f86091fdf4d04b74b";
const apiKey = "https://rinkeby.infura.io/v3/" + infuraId;
const web3 = new Web3(new Web3.providers.HttpProvider(apiKey));

// async function callBuyContract() {

//   const provider = new ethers.providers.Web3Provider(window.ethereum)
//   const contract = new ethers.Contract(testPortfolioAddress, testPortfolioABI, provider)
  
//   const num = await contract.getEthBalance(testPortfolioAddress)
//   console.log(num.toString())
// }


async function buy(ethAmountInWei=500) {
  let setCall = testPortfolio.methods.buy().encodeABI();
  const tx = {
    from: myWallet.address,
    to: contractAddress,
    data: setCall,
    value: ethAmountInWei,
  };
  estGas = await web3.eth.estimateGas(tx);
  tx.gas = parseInt(estGas * 1.02);
  const signedTx = await web3.eth.accounts.signTransaction(
    tx,
    myWallet.privateKey
  );
  result = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
}

// // This buys 500 Wei worth of Folio coin, then sells it
// var weiToSpend = 500;
// var weiFolioCoinRatio = 1000;
// var tokensPurchased = weiToSpend * weiFolioCoinRatio;
// buy(weiToSpend);
// sell(tokensPurchased);


export default buy