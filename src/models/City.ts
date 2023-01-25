import { DataTypes, ModelAttributes } from "sequelize";
import GenericModel from "./GenericModel";

export default class City extends GenericModel {
  public static initModel(): void {
    const cityAttributes: ModelAttributes = {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    };

    const modelAttributes = Object.assign(
      cityAttributes,
      this.getDefaultAttributes()
    );

    City.init(modelAttributes, super.getDefaultModelConfig());
  }
}

City.initModel();
