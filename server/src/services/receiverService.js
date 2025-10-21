import { Receiver } from "../models/index.js";

export const createReceiver = async (userId, data) => {
  return Receiver.create({ ...data, user_id: userId });
};

export const getReceiversByUser = async (userId) => {
  return Receiver.findAll({ where: { user_id: userId } });
};

export const getReceiverById = async (userId, receiverId) => {
  return Receiver.findOne({ where: { id: receiverId, user_id: userId } });
};

export const updateReceiver = async (userId, receiverId, data) => {
  const receiver = await getReceiverById(userId, receiverId);
  if (!receiver) {
    const err = new Error("Receptor no encontrado");
    err.statusCode = 404;
    throw err;
  }
  return receiver.update(data);
};
