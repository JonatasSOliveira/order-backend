import UserDTO from "../dtos/UserDTO";
import IController from "../interfaces/IController";
import User from "../models/User";

export default class UserController implements IController<UserDTO> {
  async create(userDTO: UserDTO): Promise<number> {
    return (await User.create({ ...userDTO })).id;
  }

  async update(id: number, userDTO: UserDTO): Promise<void> {
    await User.update({ ...userDTO }, { where: { id } });
  }

  async delete(id: number): Promise<void> {
    await User.update({ deleted_at: new Date() }, { where: { id } });
  }

  async listAll(): Promise<UserDTO[]> {
    return await User.findAll();
  }
}
