import * as crypto from 'crypto';
import { Transaction } from './Transaction';

export class Block {
    public nonce = Math.round(Math.random() * 9999999999);

    constructor(
        public prevHash: string | null,
        public transaction: Transaction,
        public timestamp = Date.now()
    ) {}

    get hash() {
        const stringBlock = JSON.stringify(this);
        const hashBlock = crypto.createHash('SHA256');
        hashBlock.update(stringBlock).end();
        return hashBlock.digest('hex');
    }
}