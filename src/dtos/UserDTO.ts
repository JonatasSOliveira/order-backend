import GenericDTO from "./GenericDTO";

export default class UserDTO extends GenericDTO {
  public id?: number;
  public name?: string;
  public login?: string;
  public password?: string;
}
