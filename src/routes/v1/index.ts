import { Router } from "express";
import PaymentMethodRoutes from "./PaymentMethodRoutes";
import UserRoutes from "./UserRoutes";
export class RoutesV1 {
  public initRoutes(): Router {
    const router = Router();

    router.use("/v1", new UserRoutes().initRoutes());
    router.use("/v1", new PaymentMethodRoutes().initRoutes());

    return router;
  }
}
