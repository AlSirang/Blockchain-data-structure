const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(_data) {
    this.data = _data;
    this._previousHash = null;
  }

  get previousHash() {
    return this._previousHash;
  }

  set previousHash(newPreviousHash) {
    this._previousHash = newPreviousHash;
  }

  toHash() {
    return SHA256(this.data + this.previousHash); // a hash!
  }
}

module.exports = Block;
