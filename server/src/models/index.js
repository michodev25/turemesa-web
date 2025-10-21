import sequelize from "../config/db.js";
import User from "./User.js";
import Receiver from "./Receiver.js";
import Remittance from "./Remittance.js";
import ExchangeRate from "./ExchangeRate.js";

const syncDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a PostgreSQL exitosa ✅");
    await sequelize.sync({ alter: true }); // crea tablas si no existen
    console.log("Tablas sincronizadas ✅");
  } catch (error) {
    console.error("Error al conectar la DB:", error);
  }
};

export { sequelize, syncDB, User, Receiver, Remittance, ExchangeRate };
