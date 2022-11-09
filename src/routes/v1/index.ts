import { Router } from "express";
import UserRoutes from "./UserRoutes";
export class RoutesV1 {
  public initRoutes(): Router {
    const router = Router();

    router.use("/v1", new UserRoutes().initRoutes());

    return router;
  }
}
