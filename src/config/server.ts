// import express from 'express';

// const app = express();
// const graphqlHTTP = require('express-graphql');
// const cors = require('cors');
// const schema = require('../graphQL/schema');
// const path = require('path')

// // Allow cross-origin
// app.use(cors());

// app.use(
//     '/graphql',
//     graphqlHTTP({
//       schema,
//       graphiql: true,
//     }),
// );

// app.use(express.static('public'));
// app.get('*', (res) => {
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
// });
// app.use(express.static('public'));
// const PORT : string|number = process.env.PORT || 5000;
// app.listen(PORT,() => console.log(`Server started on port ${PORT}`));

import "reflect-metadata"
import { ApolloServer } from 'apollo-server-express';
import Express from "express"
import { buildSchema } from 'type-graphql';
import { PingResolver } from '../resolvers/ping';

import { createConnection } from "typeorm";

const main = async ()  => {
    const schema = await buildSchema({
        resolvers: [PingResolver]
    });

    const apolloServer = new ApolloServer({schema})
    const app = Express();
    apolloServer.applyMiddleware({ app });

    await createConnection().then(()=>{
      console.log('connection created');
    }).catch(() =>
        console.log('error') 
    )

    const PORT : string|number = process.env.PORT || 5000
    app.listen(PORT, ()=> 
    console.log(`Server started on port ${PORT}`));
} 

main();