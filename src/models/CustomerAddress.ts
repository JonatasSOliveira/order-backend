import { DataTypes, ModelAttributes } from "sequelize";

import GenericModel from "./GenericModel";

import City from "./City";
import Customer from "./Customer";
import Neighborhood from "./Neighborhood";

export default class CustomerAddress extends GenericModel {
  public static initModel(): void {
    const customeraddressAttributes: ModelAttributes = {
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      complement: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      reference_point: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    };

    const modelAttributes = Object.assign(
      customeraddressAttributes,
      this.getDefaultAttributes()
    );

    CustomerAddress.init(modelAttributes, super.getDefaultModelConfig());
  }
}

CustomerAddress.initModel();

Customer.hasMany(CustomerAddress);
CustomerAddress.belongsTo(Customer);

City.hasMany(CustomerAddress);
CustomerAddress.belongsTo(City);

Neighborhood.hasMany(CustomerAddress);
CustomerAddress.belongsTo(Neighborhood);
