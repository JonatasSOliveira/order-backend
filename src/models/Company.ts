import { DataTypes, ModelAttributes } from "sequelize";
import GenericModel from "./GenericModel";

export default class Company extends GenericModel {
  public static initModel(): void {
    const companyAttributes: ModelAttributes = {
      fantasy_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company_name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
      },
    };

    const modelAttributes = Object.assign(
      companyAttributes,
      this.getDefaultAttributes()
    );

    Company.init(modelAttributes, super.getDefaultModelConfig());
  }
}
Company.initModel();
