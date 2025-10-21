import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./User.js";
import Receiver from "./Receiver.js";

const Remittance = sequelize.define("Remittance", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  from_currency: { type: DataTypes.STRING, allowNull: false },
  to_currency: { type: DataTypes.STRING, allowNull: false },
  amount: { type: DataTypes.FLOAT, allowNull: false },
  converted_amount: { type: DataTypes.FLOAT },
  rate_used: { type: DataTypes.FLOAT },
  status: { type: DataTypes.STRING, defaultValue: "pending" },
}, { timestamps: true });

Remittance.belongsTo(User, { foreignKey: "sender_id", as: "sender" });
User.hasMany(Remittance, { foreignKey: "sender_id", as: "remittancesSent" });

Remittance.belongsTo(Receiver, { foreignKey: "receiver_id" });
Receiver.hasMany(Remittance, { foreignKey: "receiver_id" });

export default Remittance;
