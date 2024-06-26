/* eslint-disable prettier/prettier */
export default abstract class Model<T, FindType, CreateType, UpdateType> {
    protected abstract model
  
    public abstract getAll(options?: FindType): Promise<T[]>
    public abstract getById(id: string | number, options?: FindType): Promise<T | null>
    public abstract create(data: CreateType): Promise<T>
    public abstract update(id: string | number, data: UpdateType): Promise<T>
    public abstract upsert(id: string | number, data: CreateType): Promise<T>
    public abstract delete(id: string | number): Promise<T>
  }
  