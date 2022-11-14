import { Request, Response, Router } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
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

  protected async listAll(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<UserDTO[], Record<string, any>>
  ): Promise<void> {
    const users = await this.userController.listAll();
    res.status(200).send(users);
  }

  protected async create(
    req: Request<ParamsDictionary, any, UserDTO, ParsedQs, Record<string, any>>,
    res: Response<{ id: number }, Record<string, any>>
  ): Promise<void> {
    const user = req.body;
    const userId = await this.userController.create(user);
    res.status(201).send({ id: userId });
  }

  protected async update(
    req: Request<{ id: string }, any, UserDTO, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): Promise<void> {
    const userId = Number(req.params.id);
    const user = req.body;
    await this.userController.update(userId, user);
    res.status(200).send(null);
  }

  protected async delete(
    req: Request<{ id: string }, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): Promise<void> {
    const userId = Number(req.params.id);
    await this.userController.delete(userId);
    res.status(200).send(null);
  }

  protected async getCustomRouter(router: Router) {
    return router;
  }

  private async login(
    req: Request<ParamsDictionary, any, UserDTO, ParsedQs, Record<string, any>>,
    res: Response<UserDTO, Record<string, any>>
  ): Promise<void> {
    const { login, password }  = req.body;

    const user = await this.userController.login(login, password);
    res.status(200).send(user);
  }
}
