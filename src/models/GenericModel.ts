import { DataTypes, Model, ModelAttributes } from "sequelize";

import connection from "../connection";

export default abstract class GenericModel {
  public static TableModel = class extends Model {};

  protected abstract getModelName(): string;
  protected abstract getModelAttributes(): ModelAttributes;

  private getDefaultModelAttributes(): ModelAttributes {
    return {
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    };
  }

  public initModel() {
    const modelAttributes = {
      ...this.getModelAttributes(),
      ...this.getDefaultModelAttributes(),
    };

    GenericModel.TableModel.init(modelAttributes, {
      sequelize: connection,
      underscored: true,
      modelName: this.getModelName(),
    });
  }
}
