import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./User.js";

const Receiver = sequelize.define("Receiver", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  last_name: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING, allowNull: false },
  identity_id: { type: DataTypes.STRING, allowNull: false },
  country: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: true });

Receiver.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Receiver, { foreignKey: "user_id" });

export default Receiver;
