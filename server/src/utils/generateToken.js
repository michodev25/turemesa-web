import jwt from "jsonwebtoken";

export const  generateToken =  async (userId) => {
  return await jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "2h" });
};
