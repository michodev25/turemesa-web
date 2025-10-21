import { createReceiver, getReceiversByUser } from "../services/receiverService.js";

export const addReceiver = async (req, res) => {
  try {
    const receiver = await createReceiver(req.user.id, req.body);
    res.status(201).json(receiver);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getReceivers = async (req, res) => {
  try {
    const receivers = await getReceiversByUser(req.user.id);
    res.json(receivers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
