import { DataTypes } from "sequelize";
import crypto from "crypto";

import GenericModel from "./GenericModel";

export default class User extends GenericModel {
  public id?: number;
  public login!: string;
  public password!: string;

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
User.beforeCreate((user, options) => {
  const hashPassword = crypto
    .createHash("md5")
    .update(user.password)
    .digest("hex");

  user.password = hashPassword;
});
