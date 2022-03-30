const Web3 = require("web3");
const ethers = require("ethers");
const testPortfolioABI = require("./testPortfolioABI.json");

// Input the mnemonic for your wallet
// Note: this is not how we should be instantiating the wallet. Instead, we should pull in the address from the Metamask component
const mnemonicPhrase =
  "decrease hurdle betray happy asthma scatter muffin follow gauge dismiss load ball";
const myWallet = ethers.Wallet.fromMnemonic(mnemonicPhrase);

// Connect to Rinkeby (may be other ways to do this than Infura)
const infuraId = "1c722de80b77412f86091fdf4d04b74b";
const apiKey = "https://rinkeby.infura.io/v3/" + infuraId;
const web3 = new Web3(new Web3.providers.HttpProvider(apiKey));

// Connect to the contract
const testPortfolioAddress = "0x7157Ea1F87Cc4CbeE63137D3CB5ecBd44eE1960a";
const testPortfolio = new Web3.eth.Contract(
  testPortfolioABI,
  testPortfolioAddress
);

export async function buy(ethAmountInWei = 500) {
  let setCall = testPortfolio.methods.buy().encodeABI();
  const tx = {
    from: myWallet.address,
    to: testPortfolioAddress,
    data: setCall,
    value: ethAmountInWei,
  };
  let estGas = await web3.eth.estimateGas(tx);
  tx.gas = parseInt(estGas * 1.02);
  const signedTx = await web3.eth.accounts.signTransaction(
    tx,
    myWallet.privateKey
  );
  await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
}
