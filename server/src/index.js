import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import receiverRoutes from "./routes/receiverRoutes.js";
import remittanceRoutes from "./routes/remittanceRoutes.js";
import { syncDB } from "./models/index.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
// Sincronizar la base de datos
syncDB();

// Rutas principales
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/receivers", receiverRoutes);
app.use("/api/v1/remittances", remittanceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

