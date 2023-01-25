import { Router } from "express";

import PaymentMethodController from "../../controllers/PaymentMethodController";
import PaymentMethodDTO from "../../dtos/PaymentMethodDTO";
import GenericRoutes from "../GenericRoutes";

export default class PaymentMethodRoutes extends GenericRoutes<PaymentMethodDTO> {
  private paymentmethodController = new PaymentMethodController();
  protected getSingularRoutePath(): string {
    return "payment-method";
  }
  protected getPluralRoutePath(): string {
    return "payment-methods";
  }
  protected async listAll(): Promise<PaymentMethodDTO[]> {
    return await this.paymentmethodController.listAll();
  }
  protected async create(paymentmethod: PaymentMethodDTO) {
    const paymentmethodId = await this.paymentmethodController.create(
      paymentmethod
    );
    return paymentmethodId;
  }
  protected async update(
    paymentmethodId: number,
    paymentmethod: PaymentMethodDTO
  ): Promise<void> {
    await this.paymentmethodController.update(paymentmethodId, paymentmethod);
  }
  protected async delete(paymentmethodId: number): Promise<void> {
    await this.paymentmethodController.delete(paymentmethodId);
  }
  protected getCustomRouter(router: Router): Router {
    return router;
  }
}
