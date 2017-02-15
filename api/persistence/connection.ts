import { MongoClient, Db, FindAndModifyWriteOpResultObject } from 'mongodb';

const mongoUrl: string = "mongodb://localhost:27017/schedulingApp";

export class Connection {
    static conn(): Promise<Db> {
        return Promise.resolve<Db>(
            MongoClient.connect(mongoUrl)
                .then((db: Db) => {
                    console.log('conectado');
                    return db;
                })
        )
            .catch((erro: any) => {
                console.log(erro);
            });
    }
}
