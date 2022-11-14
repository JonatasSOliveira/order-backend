import UserDTO from "../dtos/UserDTO";
import IController from "../interfaces/IController";
import User from "../models/User";

export default class UserController implements IController<UserDTO> {
  public async create(userDTO: UserDTO): Promise<number> {
    return Number((await User.create({ ...userDTO })).id);
  }

  public async update(id: number, userDTO: UserDTO): Promise<void> {
    await User.update({ ...userDTO }, { where: { id } });
  }

  public async delete(id: number): Promise<void> {
    await User.update({ deleted_at: new Date() }, { where: { id } });
  }

  public async listAll(): Promise<UserDTO[]> {
    return await User.findAll();
  }

  public async login(login: string, password: string): Promise<UserDTO> {
    return await User.findOne({
      where: {
        login: login,
        password: password
      }
    });
  }
}
