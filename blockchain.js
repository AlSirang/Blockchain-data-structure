const Block = require("./block");

class Blockchain {
  constructor() {
    const genesisBlock = new Block();
    this.chain = [genesisBlock];
  }

  addBlock(block) {
    const lastBlock = this.chain[this.chain.length - 1];

    block.previousHash = lastBlock.toHash();

    this.chain.push(block);
  }

  isValid() {
    let isChainValid = true;

    for (let i = 1; i < this.chain.length; i++) {
      const actualPreviousBlockHash = this.chain[i - 1].toHash();
      const currentBlockPrevinousHash = this.chain[i].previousHash;

      if (
        actualPreviousBlockHash.toString() !==
        currentBlockPrevinousHash.toString()
      )
        isChainValid = false;
    }

    return isChainValid;
  }
}

module.exports = Blockchain;
