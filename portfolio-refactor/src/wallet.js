import { Wallet } from "ethers";

const mnemonicPhrase =
  "bird now physical flavor file divide now impulse casino whip sponsor ankle";

const wallet = Wallet.fromMnemonic(mnemonicPhrase);

export default wallet;
