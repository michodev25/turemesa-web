import express from "express";
import { addReceiver, getReceivers } from "../controllers/receiverController.js";
import { protect } from "../middlewares/authMiddleware.js"; 
const router = express.Router();

router.post("/", protect, addReceiver);
router.get("/", protect, getReceivers);

export default router;
