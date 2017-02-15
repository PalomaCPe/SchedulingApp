import {} from 'mongodb';

const mongoUrl: string = "";

export class Connection {
    static conn(): Promise<Db> {
        return Promise.resolve<Db>(
            MongoClient.connect(mongoUrl)
            .then(db)
        )
    }
}