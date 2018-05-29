import { Router } from 'express';
import CokeCoin from './factories/cokecoin';

const router = new Router();

const cokecoin = new CokeCoin();

const responseMiddleware = (req, res) => res.json(req.responseValue);

router.post('/transactions', cokecoin.newTransaction(), responseMiddleware);

router.get('/mine', cokecoin.mine(), responseMiddleware);

router.get('/chain', cokecoin.getChain(), responseMiddleware);

export default router;
