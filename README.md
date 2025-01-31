# Simple Blockchain Implementation in TypeScript

This project is a simple implementation of a blockchain in TypeScript. It includes basic functionalities such as creating transactions, mining blocks, and managing wallets.

## Project Structure

The project is organized into the following files:

- `Transaction.ts`: Defines the `Transaction` class.
- `Block.ts`: Defines the `Block` class.
- `Chain.ts`: Defines the `Chain` class, which manages the blockchain.
- `Wallet.ts`: Defines the `Wallet` class, which handles public and private keys and sending coins.
- `index.ts`: Example usage of the blockchain, creating wallets, and performing transactions.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- TypeScript

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ahussam/simple-blockchain-ts.git
    cd simple-blockchain-ts
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Compile the TypeScript files:

    ```bash
    npx tsc
    ```

4. Run the example:

    ```bash
    node index.ts
    ```

## Usage

You can create new wallets, send coins between wallets, and view the blockchain state. The example in `index.ts` demonstrates how to use the classes:

```typescript
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
```

Output

```
 simple-blockchain-ts# npm run start

> simple-blockchain-ts@1.0.0 start
> tsc && node .

Mining ...
Solved: 13149
Mining ...
Solved: 14415
Mining ...
Solved: 27698
Chain {
  chain: [
    Block {
      prevHash: null,
      transaction: [Transaction],
      timestamp: 1737038976020,
      nonce: 948528052
    },
    Block {
      prevHash: '998f2cf6de89164549e3bcd8a31a0db63dd3758f395fb9bb6b8d4090df5789b0',
      transaction: [Transaction],
      timestamp: 1737038976130,
      nonce: 1114657594
    },
    Block {
      prevHash: '5c305b9ede42dda110a5b9c8533cc141e958adfbe1c1e272a434f2894be151c8',
      transaction: [Transaction],
      timestamp: 1737038976173,
      nonce: 2378387712
    },
    Block {
      prevHash: '3b8fd36881983c1a48b9a40f906c3fd6e75e75aeacd5872ad327c178e3d90313',
      transaction: [Transaction],
      timestamp: 1737038976202,
      nonce: 9744859752
    }
  ]
}
```
