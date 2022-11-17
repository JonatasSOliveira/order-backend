import { DataTypes, InitOptions, Model, ModelAttributes } from "sequelize";
import connection from "../connection";

export default class GenericModel extends Model {
  protected static getDefaultAttributes(): ModelAttributes {
    return {
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    };
  }

  protected static getDefaultModelConfig(): InitOptions {
    return {
      sequelize: connection,
      underscored: true,
    }
  }
}
