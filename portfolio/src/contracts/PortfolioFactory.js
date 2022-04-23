import { ethers } from "ethers";
import PortfolioFactory from "./PortfolioFactory.json";

const infuraApiKey =
  "https://kovan.infura.io/v3/1c722de80b77412f86091fdf4d04b74b";
const contractAddress = "0x46783Fc2f92AdC132F5DE2f4BDE4138e3Ed8673a";
let provider = new ethers.providers.InfuraProvider("kovan", infuraApiKey);

const portfolioFactoryContract = new ethers.Contract(
  contractAddress,
  PortfolioFactory.abi,
  ethers.providers.getDefaultProvider("kovan")
);

export default portfolioFactoryContract;
