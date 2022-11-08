import IController from "../interfaces/IController";

export default class UserController implements IController<UserDTO> {
  async criar(model: UserDTO): Promise<number> {
    return 0;
  }

  async alterar(id: number, model: UserDTO): Promise<void> {}

  async deletar(id: number): Promise<void> {}

  async listarTodos(): Promise<UserDTO[]> {
    return [];
  }
}
