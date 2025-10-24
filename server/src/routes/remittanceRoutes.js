import express from "express";
import { getRemittance, getRemittances, sendRemittance } from "../controllers/remittanceController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, sendRemittance);
router.get("/", protect, getRemittances);
router.get("/:id", protect, getRemittance);

export default router;
