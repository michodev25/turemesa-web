import express from "express";
import { addReceiver, getReceiverByIdController, getReceivers, updateReceiverController } from "../controllers/receiverController.js";
import { protect } from "../middlewares/authMiddleware.js"; 
const router = express.Router();

router.post("/", protect, addReceiver);
router.get("/", protect, getReceivers);
router.get("/:id", protect, getReceiverByIdController);
router.put("/:id", protect, updateReceiverController);

export default router;
