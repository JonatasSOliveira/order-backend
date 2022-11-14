import { Request, Response, Router } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

export default abstract class GenericRoutes<DTO> {
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
    const router = Router();

    const singularRoutePath = this.getSingularRoutePath();
    const pluralRoutePath = this.getPluralRoutePath();

    router.get(`/${pluralRoutePath}`, (req, res) => this.listAll(req, res));
    router.post(`/${singularRoutePath}`, (req, res) => this.create(req, res));
    router
      .route(`/${singularRoutePath}/:id`)
      .put((req, res) => this.update(req, res))
      .delete((req, res) => this.delete(req, res));

    router = this.getCustomRouter(router);

    return router;
  }
}
