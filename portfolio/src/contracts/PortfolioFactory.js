import web3 from "../helpers/web3";
import abi from "./PortfolioFactoryABI.json";

const contractAddress = "0xeb69833E23155B7ADB37F2c4dEFE80D4EF06379D";

const portfolioFactoryContract = new web3.eth.Contract(abi, contractAddress);

export default portfolioFactoryContract;
