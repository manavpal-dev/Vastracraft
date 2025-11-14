import express from 'express'
import { protect } from '../middleware/authMiddleware';

const cartRouter = express.Router();

cartRouter.post("/",protect);


export default cartRouter;