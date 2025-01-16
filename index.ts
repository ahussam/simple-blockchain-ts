import { Wallet } from './Wallet';
import { Chain } from './Chain';

// Example

const abdullahWallet = new Wallet();
const satoshiWallet = new Wallet();
const elonWallet = new Wallet();

satoshiWallet.sendCoin(1337, abdullahWallet.publicKey);
abdullahWallet.sendCoin(12, elonWallet.publicKey);
elonWallet.sendCoin(5, satoshiWallet.publicKey);

console.log(Chain.instance);