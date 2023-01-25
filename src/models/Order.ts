import { DataTypes, ModelAttributes } from "sequelize";

import GenericModel from "./GenericModel";

import Customer from "./Customer";

export default class Order extends GenericModel {
  public static initModel(): void {
    const orderAttributes: ModelAttributes = {
      order_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    };

    const modelAttributes = Object.assign(
      orderAttributes,
      this.getDefaultAttributes()
    );

    Order.init(modelAttributes, super.getDefaultModelConfig());
  }
}

Order.initModel();

Customer.hasMany(Order);
Order.belongsTo(Customer);
