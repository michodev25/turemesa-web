import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ExchangeRate = sequelize.define("ExchangeRate", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  from_currency: { type: DataTypes.STRING, allowNull: false },
  to_currency: { type: DataTypes.STRING, allowNull: false },
  rate: { type: DataTypes.FLOAT, allowNull: false },
}, { timestamps: true });

export default ExchangeRate;
