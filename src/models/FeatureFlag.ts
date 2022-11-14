import { DataTypes } from "sequelize";

import GenericModel from "./GenericModel";

export default class FeatureFlag extends GenericModel {
  public static initModel(): void {
    super.initModel({
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    });
  }
}

FeatureFlag.initModel();