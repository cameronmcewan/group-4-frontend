import web3 from "./web3";
import abi from "./testPortfolioABI.json";

const contractAddress = "0x6cb8336581f0b99b225b14f3afe7e2ac3f876c4f";

const contract = new web3.eth.Contract(abi, contractAddress);

export default contract;
