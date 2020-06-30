import "reflect-metadata"
import { ApolloServer } from 'apollo-server-express';
import Express from "express"
import { buildSchema } from 'type-graphql';
import { LocationResolver } from "./resolvers/location-resolve";
import { createConnection } from "typeorm";





const main = async ()  => {
    const schema = await buildSchema({
        resolvers: [LocationResolver]
    });


    const apolloServer = new ApolloServer({schema})
    const app = Express();
    apolloServer.applyMiddleware({ app });

    await createConnection().then(()=>{
        console.log('starteddd')
    }).catch(() =>
        console.log('error') 
    )

    app.listen(5000, ()=> 
    console.log('started'));
} 

main();