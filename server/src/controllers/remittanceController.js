import { createRemittance, getRemittancesBySender,getRemittanceById  } from "../services/remittanceService.js";

export const sendRemittance = async (req, res) => {
  try {
    const remittance = await createRemittance(req.user.id, req.body);
    res.status(201).json(remittance);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getRemittances = async (req, res) => {
  try {
    const remittances = await getRemittancesBySender(req.user.id);
    res.status(200).json(remittances);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getRemittance = async (req, res) => {
  try {
    const remittance = await getRemittanceById(req.user.id, req.params.id);
    if (!remittance) {
      return res.status(404).json({ error: "Remittance not found" });
    }
    res.status(200).json(remittance);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
