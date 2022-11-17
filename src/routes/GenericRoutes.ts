import { Request, Response, Router } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import AuthMiddleware from "../middleware/AuthMiddleware";

export default abstract class GenericRoutes<DTO> {
  private authMiddleware = new AuthMiddleware();

  protected abstract getSingularRoutePath(): string;
  protected abstract getPluralRoutePath(): string;
  protected abstract getCustomRouter(router: Router): Router;

  protected abstract listAll(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<DTO[], Record<string, any>>
  ): Promise<void>;
  protected abstract create(
    req: Request<ParamsDictionary, any, DTO, ParsedQs, Record<string, any>>,
    res: Response<{ id: number }, Record<string, any>>
  ): Promise<void>;
  protected abstract update(
    req: Request<{ id: string }, any, DTO, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): Promise<void>;
  protected abstract delete(
    req: Request<{ id: string }, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): Promise<void>;

  public initRoutes(): Router {
    let router = Router();

    const singularRoutePath = this.getSingularRoutePath();
    const pluralRoutePath = this.getPluralRoutePath();

    router.get(`/${pluralRoutePath}`, this.authMiddleware.authenticate, (req, res) => this.listAll(req, res));
    router.post(`/${singularRoutePath}`, this.authMiddleware.authenticate, (req, res) => this.create(req, res));
    router
      .route(`/${singularRoutePath}/:id`)
      .put(this.authMiddleware.authenticate, (req, res) => this.update(req, res))
      .delete(this.authMiddleware.authenticate, (req, res) => this.delete(req, res));

    router = this.getCustomRouter(router);

    return router;
  }
}
