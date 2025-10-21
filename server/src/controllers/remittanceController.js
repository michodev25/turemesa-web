import { createRemittance } from "../services/remittanceService.js";

export const sendRemittance = async (req, res) => {
  try {
    const remittance = await createRemittance(req.user.id, req.body);
    res.status(201).json(remittance);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
