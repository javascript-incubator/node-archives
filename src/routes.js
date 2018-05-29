import { Router } from 'express';
import CokeCoin from './internals/cokecoin';

const router = new Router();
const cokecoin = new CokeCoin();

const responseMiddleware = (req, res) => res.json(req.responseValue);

// GETs
['mine', 'chain'].map(x => router.get(x, cokecoin[x]), responseMiddleware);

// POSTs
['transactions'].map(x => router.post(x, cokecoin[x]), responseMiddleware);

export default router;
