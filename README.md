# graphql
Fiddling with GraphQL

To use this repo,
1. Clone the repositor

2. Go to the project directory and run yarn or npm  install

3. Execute yarn run dev:server or npm run dev:server in the terminal/cmd

4. Type localhost:4000/graphql and you can query GraphiQL with following query

#for list of customers
{
  customers{name,email,age}
} 

#for a particular customer id(one of 1,2,3,4,5)
{
customer(id:3){
name,email,age
}}
