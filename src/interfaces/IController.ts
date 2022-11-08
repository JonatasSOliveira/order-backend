export default interface IController<T> {
  criar(model: T): Promise<number>;
  listarTodos(): Promise<T[]>;
  alterar(id: number, model: T): Promise<void>;
  deletar(id: number): Promise<void>;
}
