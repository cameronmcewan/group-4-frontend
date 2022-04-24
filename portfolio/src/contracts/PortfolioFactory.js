import { ethers } from "ethers";
import abi from "./PortfolioFactoryABI.json";

const infuraApiKey =
  "https://kovan.infura.io/v3/1c722de80b77412f86091fdf4d04b74b";
const contractAddress = "0xeb69833E23155B7ADB37F2c4dEFE80D4EF06379D";
let provider = new ethers.providers.InfuraProvider("kovan", infuraApiKey);

const portfolioFactoryContract = new ethers.Contract(
  contractAddress,
  abi,
  ethers.providers.getDefaultProvider("kovan")
);

export default portfolioFactoryContract;
