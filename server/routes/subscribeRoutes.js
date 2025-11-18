import express from "express"
import { subscribe } from "../controllers/subscribeController.js";

const subscribeRouter = express.Router();

// @route POST /api/subscriber
// @desc Handle newsletter subscription
// @access Public
subscribeRouter.post("/subscribe",subscribe);

export default subscribeRouter;