export default interface IController<DTO> {
  create(dto: DTO): Promise<number>;
  listAll(): Promise<DTO[]>;
  update(id: number, dto: DTO): Promise<void>;
  delete(id: number): Promise<void>;
}
