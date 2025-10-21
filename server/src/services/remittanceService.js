import { Remittance, ExchangeRate, Receiver } from "../models/index.js";

export const createRemittance = async (senderId, data) => {
  const receiver = await Receiver.findByPk(data.receiver_id);
  if (!receiver) {
    const err = new Error("Receptor no encontrado");
    err.statusCode = 404;
    throw err;
  }

  const exchange = await ExchangeRate.findOne({
    where: { from_currency: data.from_currency, to_currency: data.to_currency },
  });

  if (!exchange) {
    const err = new Error("Tasa de cambio no encontrada");
    err.statusCode = 404;
    throw err;
  }

  const converted_amount = data.amount * exchange.rate;

  return Remittance.create({
    sender_id: senderId,
    receiver_id: data.receiver_id,
    from_currency: data.from_currency,
    to_currency: data.to_currency,
    amount: data.amount,
    converted_amount,
    rate_used: exchange.rate,
    status: "completed",
  });
};
export const getRemittancesBySender = async (senderId) => {
  return Remittance.findAll({ where: { sender_id: senderId } });
};

export const getRemittanceById = async (senderId, remittanceId) => {
  return Remittance.findOne({ where: { id: remittanceId, sender_id: senderId } });
};

