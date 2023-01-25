import IController from "../interfaces/IController";

import PaymentMethodDTO from "../dtos/PaymentMethodDTO";
import PaymentMethod from "../models/PaymentMethod";

export default class PaymentMethodController
  implements IController<PaymentMethodDTO>
{
  public async create(paymentmethodDTO: PaymentMethodDTO): Promise<number> {
    return Number((await PaymentMethod.create({ ...paymentmethodDTO })).id);
  }

  public async update(
    id: number,
    paymentmethodDTO: PaymentMethodDTO
  ): Promise<void> {
    await PaymentMethod.update({ ...paymentmethodDTO }, { where: { id } });
  }

  public async delete(id: number): Promise<void> {
    await PaymentMethod.update({ deleted_at: new Date() }, { where: { id } });
  }

  public async listAll(): Promise<PaymentMethodDTO[]> {
    return await PaymentMethod.findAll({ where: { deleted_at: null } });
  }
}
