import { registerUser, loginUser } from "../services/authService.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, country } = req.body;
    const {user, token} = await registerUser({name, email, password, country});
    res.cookie("token", token )
    res.status(201).json({ message: "Usuario registrado" }); 
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await loginUser({email, password});
    res.cookie("token", token )
    res.json({ token, user });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
