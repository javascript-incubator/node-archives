import { Router } from 'express';
import CokeCoin from './internals/cokecoin';

const router = new Router();
const cokecoin = new CokeCoin();

const responseMiddleware = (req, res) => {
  res.json(req.responseValue);
};

// GETs
['/mine', '/chain'].map(x =>
  router.get(x, cokecoin[x.slice(1)](), responseMiddleware),
);

// POSTs
['/transaction'].map(x =>
  router.post(x, cokecoin[x.slice(1)](), responseMiddleware),
);

export default router;
