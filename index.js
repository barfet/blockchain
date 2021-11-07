import { Block, Blockchain } from './simpleChain.js'

let blockchain = new Blockchain();

blockchain.addBlock(new Block('test'));
blockchain.addBlock(new Block('test 2'));

console.log(blockchain);