import express from 'express';


const app = express();
const graphqlHTTP = require('express-graphql');
const schema = require('../graphQL/schema');


app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
);
  
app.listen(4000);

app.use("*",(req, res) =>{
    res.send("<h1>Welcome to your simple server! Awesome right</h1>");
});

const PORT : string|number = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));