import { DataTypes, ModelAttributes } from "sequelize";
import GenericModel from "./GenericModel";

export default class Customer extends GenericModel {
  public static initModel(): void {
    const customerAttributes: ModelAttributes = {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      federal_document: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
      },
    };

    const modelAttributes = Object.assign(
      customerAttributes,
      this.getDefaultAttributes()
    );

    Customer.init(modelAttributes, super.getDefaultModelConfig());
  }
}

Customer.initModel();
