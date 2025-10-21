import { createReceiver, getReceiversByUser,getReceiverById, updateReceiver } from "../services/receiverService.js";

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

export const getReceiverByIdController = async (req, res) => {
  try {
      const id = parseInt(req.params.id);
    const receiver = await getReceiverById(req.user.id, id);
    if (!receiver) {
      return res.status(404).json({ error: "Receptor no encontrado" });
    }
    res.json(receiver);
  } catch (err) {
    res.status(500).json({ error: err.message });
  };
}

export const updateReceiverController = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updatedReceiver = await updateReceiver(req.user.id, id, req.body);
    res.json(updatedReceiver);
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
};