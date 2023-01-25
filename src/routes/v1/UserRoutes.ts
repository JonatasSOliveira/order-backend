import { Request, Response, Router } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import jwt from "jsonwebtoken";

import UserController from "../../controllers/UserController";
import UserDTO from "../../dtos/UserDTO";
import GenericRoutes from "../GenericRoutes";

export default class UserRoutes extends GenericRoutes<UserDTO> {
  private userController = new UserController();

  protected getSingularRoutePath(): string {
    return "user";
  }

  protected getPluralRoutePath(): string {
    return "users";
  }

  protected async listAll(): Promise<UserDTO[]> {
    return await this.userController.listAll();
  }

  protected async create(user: UserDTO) {
    const userId = await this.userController.create(user);
    return userId;
  }

  protected async update(userId: number, user: UserDTO): Promise<void> {
    await this.userController.update(userId, user);
  }

  protected async delete(userId: number): Promise<void> {
    await this.userController.delete(userId);
  }

  protected getCustomRouter(router: Router): Router {
    return router;
  }

  private async login(
    req: Request<ParamsDictionary, any, UserDTO, ParsedQs, Record<string, any>>,
    res: Response<{ user: UserDTO; token: string }, Record<string, any>>
  ): Promise<void> {
    const login = req.body.login!;
    const password = req.body.password!;

    const user = await this.userController.login(login, password);

    if (!user) {
      res.status(401).send();
      return;
    }

    const token = jwt.sign(user, process.env.APP_PRIVATE_KEY!);
    res.status(200).send({ user, token });
  }
}
