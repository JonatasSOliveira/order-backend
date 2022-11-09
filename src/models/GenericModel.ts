import { DataTypes, Model, ModelAttributes } from "sequelize";
import connection from "../connection";

export default class GenericModel extends Model {
  private static getDefaultAttributes(): ModelAttributes {
    return {
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    };
  }

  protected static initModel(modelAttributes: ModelAttributes): void {
    GenericModel.init(
      { ...modelAttributes, ...this.getDefaultAttributes() },
      {
        sequelize: connection,
        underscored: true,
      }
    );
  }
}
