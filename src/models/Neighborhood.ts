import { DataTypes, ModelAttributes } from "sequelize";
import GenericModel from "./GenericModel";

export default class Neighborhood extends GenericModel {
  public static initModel(): void {
    const neighborhoodAttributes: ModelAttributes = {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    };

    const modelAttributes = Object.assign(
      neighborhoodAttributes,
      this.getDefaultAttributes()
    );

    Neighborhood.init(modelAttributes, super.getDefaultModelConfig());
  }
}

Neighborhood.initModel();
