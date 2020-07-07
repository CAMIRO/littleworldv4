import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { buildSchema } from 'type-graphql';
import { PingResolver } from './resolvers/ping';
import { DessertResolver } from './resolvers/dessertResolver';
const app = express();
const cors = require('cors');



export const startServer = async () => {
    // Allow cross-origin
    app.use(cors());

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PingResolver, DessertResolver],
            validate: false
        }),
        context: ({req, res}) => ({req, res})
    });
    server.applyMiddleware({ app, path: '/graphql'});


    return app;
}
