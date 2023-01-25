import { DataTypes, ModelAttributes } from "sequelize";

import GenericModel from "./GenericModel";

export default class PaymentMethod extends GenericModel {
  public static initModel(): void {
    const paymentmethodAttributes: ModelAttributes = {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    };

    const modelAttributes = Object.assign(
      paymentmethodAttributes,
      this.getDefaultAttributes()
    );

    PaymentMethod.init(modelAttributes, super.getDefaultModelConfig());
  }
}

PaymentMethod.initModel();
