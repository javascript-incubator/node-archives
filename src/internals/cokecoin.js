import { set, view, lensProp, lensPath, compose } from 'ramda';
import CokeChain from './cokechain';

class CokeCoin {
  constructor() {
    this.state = {
      blockchain: CokeChain().createNewBlock(100, 1),
    };
  }

  updateState = val => {
    const nextState = set(lensProp('blockchain'), val, this.state);
    this.state = nextState;
    return this.state;
  };

  chain() {
    return (req, res, next) => {
      req.responseValue = {
        message: 'Get Chain',
        chain: view(lensPath(['blockchain', 'chain']), this.state),
      };
      return next();
    };
  }

  mine() {
    return (req, res, next) => {
      const lastProof = compose(
        view(lensProp('proof')),
        view(lensPath(['blockchain', 'lastBlock'])),
      )(this.state);

      const proof = view(lensPath(['blockchain', 'proofOfWork']), this.state)(
        lastProof,
      );

      const previousHash = view(lensPath(['blockchain', 'hash']), this.state)(
        lastProof,
      );

      const newChain = view(lensProp('blockchain'), this.state)
        .createNewTransaction('0', process.env.NODE_NAME, 1)
        .createNewBlock(proof, previousHash);

      this.updateState(newChain);

      const responseValue = Object.assign(
        { message: 'New Block mined' },
        view(lensProp(['blockchain', 'lastBlock']), this.state)(),
      );

      req.responseValue = responseValue;
      return next();
    };
  }

  transaction() {
    return (req, res, next) => {
      const { sender, recipient, amount } = req.body;
      const newChain = view(
        lensPath(['blockchain', 'createNewTransaction']),
        this.state,
      )(sender, recipient, amount);

      this.updateState(newChain);
      const responseValue = {
        message: `Transaction will be added to Block ${
          view(lensPath(['blockchain', 'lastBlock']), this.state)().index
          }`,
      };
      req.responseValue = responseValue;
      return next();
    };
  }
}

export default CokeCoin;
