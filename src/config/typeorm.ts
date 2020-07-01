import { createConnection } from 'typeorm';
import path from 'path'

export const connect = async () => {
    await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "",
        database: "graphql-ts-server-boilerplate",
        entities: [
          path.join(__dirname, '../entity/**/**.ts')
        ],
        synchronize: true
    });
    console.log('DataBase is connected')
}