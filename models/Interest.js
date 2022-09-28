const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Interest extends Model {}

Interest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    interest: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "interest",
  }
);

module.exports = Interest;
