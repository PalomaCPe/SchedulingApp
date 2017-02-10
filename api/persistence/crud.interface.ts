export interface ICrud<T>{
    create(entity: T): Promise<T>;

    read(): Promise<T[]>;

    read(id: number): Promise<T>;

    update(entity: T): Promise<T>;

    delete(id: number): Promise<boolean>;
}