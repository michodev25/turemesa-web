import bcrypt from "bcryptjs";
import { User } from "../models/index.js";
import { generateToken } from "../utils/generateToken.js";

export const registerUser = async ({ name, email, password, country }) => {
  if (!name == !email == !password) {
    const err = new Error("Todos los campos son obligatorios");
    err.statusCode = 400;
    throw err;
  }
  
  const existing = await User.findOne({ where: { email } });
  if (existing) {
    const err = new Error("Email ya registrado");
    err.statusCode = 400;
    throw err;
  }
  const hashed = await bcrypt.hash(password, 10);
  const newUser = await User.create({ name, email, password: hashed, country });
  const token = await generateToken(newUser.id)
  return { user: newUser, token };
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    const err = new Error("Usuario no encontrado");
    err.statusCode = 404;
    throw err;
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    const err = new Error("Contraseña incorrecta");
    err.statusCode = 401;
    throw err;
  }

  const token = await generateToken(user.id)
  return { user, token };
};
