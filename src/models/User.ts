import { DataTypes, ModelAttributes } from "sequelize";
import crypto from "crypto";

import GenericModel from "./GenericModel";

export default class User extends GenericModel {
  public login!: string;
  public password!: string;

  public static initModel(): void {
    const userAttributes: ModelAttributes = {
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

    const modelAttributes = Object.assign(
      userAttributes,
      super.getDefaultAttributes()
    );
    User.init(modelAttributes, super.getDefaultModelConfig());
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
