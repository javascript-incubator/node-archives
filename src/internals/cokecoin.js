// import State from 'crocks/State';
import CokeChain from './cokechain';

// const { get, put } = State;

class CokeCoin {
  constructor() {
    this.blockchain = CokeChain().createNewBlock(100, 1);
  }

  chain() {
    return (req, res, next) => {
      req.responseValue = {
        message: 'Get Chain',
        chain: this.blockchain.chain,
      };
      return next();
    };
  }

  mine() {
    return (req, res, next) => {
      const lastBlock = this.blockchain.lastBlock();
      const lastProof = lastBlock.proof;
      const proof = this.blockchain.proofOfWork(lastProof);
      const previousHash = this.blockchain.hash(lastProof);

      this.blockchain = this.blockchain
        .createNewTransaction('0', process.env.NODE_NAME, 1)
        .createNewBlock(proof, previousHash);

      const responseValue = Object.assign(
        {
          message: 'New Block mined',
        },
        this.blockchain.lastBlock(),
      );

      req.responseValue = responseValue;
      return next();
    };
  }

  transaction() {
    return (req, res, next) => {
      const { sender, recipient, amount } = req.body;
      this.blockchain = this.blockchain.createNewTransaction(
        sender,
        recipient,
        amount,
      );
      const responseValue = {
        message: `Transaction will be added to Block ${
          this.blockchain.lastBlock().index
        }`,
      };
      req.responseValue = responseValue;
      return next();
    };
  }
}

export default CokeCoin;
