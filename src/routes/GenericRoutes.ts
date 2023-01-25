import { Request, Response, Router } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import AuthMiddleware from "../middleware/AuthMiddleware";

export default abstract class GenericRoutes<DTO> {
  private authMiddleware = new AuthMiddleware();

  protected abstract getSingularRoutePath(): string;
  protected abstract getPluralRoutePath(): string;
  protected abstract getCustomRouter(router: Router): Router;

  protected abstract listAll(): Promise<DTO[]>;
  protected abstract create(dataDTO: DTO): Promise<number>;
  protected abstract update(id: number, data: DTO): Promise<void>;
  protected abstract delete(id: number): Promise<void>;

  private async defaultPostRequest(
    req: Request<ParamsDictionary, any, DTO, ParsedQs, Record<string, any>>,
    res: Response<{ id: number }, Record<string, any>>
  ): Promise<void> {
    const createdId = await this.create(req.body);
    res.status(201).send({ id: createdId });
  }

  private async defaultGetRequest(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<DTO[], Record<string, any>>
  ): Promise<void> {
    res.status(200).send(await this.listAll());
  }

  private async defaultPutRequest(
    req: Request<{ id: string }, any, DTO, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ) {
    await this.update(Number(req.params.id), req.body);
    res.status(200).send(null);
  }

  private async defaultDeleteRequest(
    req: Request<{ id: string }, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): Promise<void> {
    await this.delete(Number(req.params.id));
    res.status(200).send(null);
  }

  public initRoutes(): Router {
    let router = Router();

    const singularRoutePath = this.getSingularRoutePath();
    const pluralRoutePath = this.getPluralRoutePath();

    router.get(
      `/${pluralRoutePath}`,
      this.authMiddleware.authenticate,
      this.defaultGetRequest.bind(this)
    );
    router.post(
      `/${singularRoutePath}`,
      this.authMiddleware.authenticate,
      this.defaultPostRequest.bind(this)
    );
    router
      .route(`/${singularRoutePath}/:id`)
      .put(this.authMiddleware.authenticate, this.defaultPutRequest.bind(this))
      .delete(
        this.authMiddleware.authenticate,
        this.defaultDeleteRequest.bind(this)
      );

    router = this.getCustomRouter(router);

    return router;
  }
}
