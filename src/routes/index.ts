import { Express } from "express";

export default class Routes {
  private app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  public iniciarRotas() {
    this.app.get("/", (req, res) => res.send({ hello: "world!" }));
  }
}
