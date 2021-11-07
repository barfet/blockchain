import SHA256 from 'crypto-js/sha256.js'

/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/
export class Block {

    constructor(data) {
        this.hash = "";
        this.height = 0;
        this.body = data;
        this.time = 0;
        this.previousBlockHash = "";
    }
}

/* ===== Blockchain ===================================
|  Class with a constructor for blockchain data model  |
|  with functions to support:                          |
|     - createGenesisBlock()                           |
|     - getLatestBlock()                               |
|     - addBlock()                                     |
|     - getBlock()                                     |
|     - validateBlock()                                |
|     - validateChain()                                |
|  ====================================================*/
export class Blockchain {

    constructor() {
        // new chain array
        this.chain = [];
        this.addBlock(new Block("First block in the chain - Genesis block"));
    }

    // addBlock method
    addBlock(newBlock) {
        if (this.chain.length > 0) {
            newBlock.previousBlockHash = this.chain[this.chain.length-1].hash;
        }
        newBlock.height = this.chain.length;
        newBlock.time = new Date().getTime().toString().slice(0, -3);
        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();

        this.chain.push(newBlock);
    }
}