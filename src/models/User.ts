import { ModelAttributes, DataTypes } from "sequelize";
import GenericModel from "./GenericModel";

export default class User extends GenericModel {
  protected getModelName(): string {
    return "user";
  }

  protected getModelAttributes(): ModelAttributes {
    return {
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
    };
  }
}
