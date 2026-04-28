// Blockchain Developer: "Hello World" Implemented as Immutable Ledger

const crypto = require('crypto');

class Block {
  constructor(index, timestamp, data, previousHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    const input = this.index + this.timestamp + JSON.stringify(this.data)
      + this.previousHash + this.nonce;
    return crypto.createHash('sha256').update(input).digest('hex');
  }

  mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
  }
}

class Blockchain {
  constructor() {
    this.chain = [];
    this.difficulty = 2;
    this.genesisBlock = new Block(0, Date.now(), "Genesis Block", "0");
    this.genesisBlock.mineBlock(this.difficulty);
    this.chain.push(this.genesisBlock);
  }

  addBlock(data) {
    const lastBlock = this.chain[this.chain.length - 1];
    const newBlock = new Block(this.chain.length, Date.now(), data, lastBlock.hash);
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }
}

const ledger = new Blockchain();
ledger.addBlock("Hello World");
ledger.addBlock("Immutable Message");

console.log("=== Blockchain Ledger ===");
ledger.chain.forEach(block => {
  console.log(`Block ${block.index}: ${block.data} | Hash: ${block.hash.substring(0, 16)}...`);
});
console.log("\nHello World - Distributed Ledger Consensus Achieved");
