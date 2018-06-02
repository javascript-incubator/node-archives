import { createHmac } from 'crypto';

const CokeChain = Types.tagged('Cokechain', ['chain', 'transactions']);

CokeChain.prototype.createNewBlock = function(proof, previousHash) {
  const block = {
    index: this.chain.length + 1,
    timestamp: new Date(),
    transactions: this.transactions,
    proof,
    previous_hash: previousHash,
  };

  return CokeChain(this.chain.concat(block), []);
};

CokeChain.prototype.lastBlock = function() {
  return this.chain.last();
};

CokeChain.prototype.createNewTransaction = function(sender, recipient, amount) {
  return CokeChain(
    [
      ...this.chain.slice(0, this.chain.length - 1),
      { ...this.chain.last(), index: this.chain.last().index + 1 },
    ],
    this.transactions.concat({ sender, recipient, amount }),
  );
};

CokeChain.prototype.hash = function(block) {
  const blockString = JSON.stringify(block);
  const hash = createHmac(process.env.HASH_TYPE, process.env.CRYPTO_SECRET)
    .update(blockString)
    .digest('hex');

  return hash;
};

CokeChain.prototype.validProof = function(lastProof, proof) {
  const guessHash = createHmac(process.env.HASH_TYPE, process.env.CRYPTO_SECRET)
    .update(`${lastProof}${proof}`)
    .digest('hex');
  return guessHash.substr(0, 4) === process.env.RESOLUTION_HASH;
};

CokeChain.prototype.proofOfWork = function(lastProof) {
  let proof = 0;
  while (!this.validProof(lastProof, proof)) {
    proof += 1;
  }
  return proof;
};

export default () => CokeChain([], []);
