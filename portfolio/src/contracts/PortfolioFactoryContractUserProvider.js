import web3 from "../helpers/web3";
import PortfolioFactory from "./PortfolioFactory.json";

const contractAddress = "0x46783Fc2f92AdC132F5DE2f4BDE4138e3Ed8673a";

const portfolioFactoryContractUserProvider = new web3.eth.Contract(
  PortfolioFactory.abi,
  contractAddress
);

export default portfolioFactoryContractUserProvider;
