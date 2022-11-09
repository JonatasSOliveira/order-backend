import { ModelAttributes, DataTypes, Model } from "sequelize";
import connection from "../connection";

export default class User extends Model {
  public id!: number;
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    underscored: true,
  }
);
