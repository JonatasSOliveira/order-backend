import { DataTypes, ModelAttributes } from "sequelize";
import GenericModel from "./GenericModel";

export default class Product extends GenericModel {
  public static initModel(): void {
    const productAttributes: ModelAttributes = {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    };

    const modelAttributes = Object.assign(
      productAttributes,
      this.getDefaultAttributes()
    );

    Product.init(modelAttributes, super.getDefaultModelConfig());
  }
}

Product.initModel();
