import UserDTO from "../dtos/UserDTO";
import IController from "../interfaces/IController";
import User from "../models/User";

export default class UserController implements IController<UserDTO> {
  async create(dto: UserDTO): Promise<number> {
    return (await User.create({ ...dto })).id;
  }

  async update(id: number, model: UserDTO): Promise<void> {}

  async delete(id: number): Promise<void> {}

  async listAll(): Promise<UserDTO[]> {
    return [];
  }
}
