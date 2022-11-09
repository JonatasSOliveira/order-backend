import { RoutesV1 } from "./v1/index";
import { Express } from "express";

export default class Routes {
  private app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  public initRoutes() {
    this.app.use("/api", new RoutesV1().initRoutes());
  }
}
