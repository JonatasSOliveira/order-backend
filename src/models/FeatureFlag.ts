import { DataTypes, ModelAttributes } from "sequelize";

import GenericModel from "./GenericModel";

export default class FeatureFlag extends GenericModel {
  public static initModel(): void {
    const featureFlagAttributes: ModelAttributes = {
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
    };

    const modelAttributes = Object.assign(featureFlagAttributes, this.getDefaultAttributes());

    FeatureFlag.init(modelAttributes, super.getDefaultModelConfig());
  }
}

FeatureFlag.initModel();