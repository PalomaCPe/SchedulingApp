export interface ICrud<T>{
    create(entity: T): Promise<T>;

    list(): Promise<T[]>;

    read(id: number): Promise<T>;

    update(entity: T): Promise<T>;

    delete(id: number): Promise<boolean>;
}