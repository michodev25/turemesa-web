import express from "express";
import { sendRemittance } from "../controllers/remittanceController.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/", protect, sendRemittance);

export default router;
