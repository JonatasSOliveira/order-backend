import { DataTypes } from "sequelize";
import GenericModel from "./GenericModel";

export default class User extends GenericModel {
  public id!: number;

  public static initModel(): void {
    super.initModel({
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
    });
  }
}

User.initModel();
