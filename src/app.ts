import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { buildSchema } from 'type-graphql';
import { PingResolver } from './resolvers/ping';
import { DessertResolver } from './resolvers/dessertResolver';
const app = express();

export const startServer = async () => {
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PingResolver, DessertResolver]
        }),
        context: ({req, res}) => ({req, res})
    }) 
    
    server.applyMiddleware({ app, path: '/graphql'});

    return app;
}
