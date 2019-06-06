const express= require('express');
const app=express();
const expressGraphQL=require('express-graphql');
const schema=require('./schema.js');



app.use('/graphql',expressGraphQL({
    schema:schema,
    graphiql:true
}));

app.listen(3032,()=>{
console.log("Server is running at port 3032 .....")
});


