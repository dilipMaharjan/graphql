const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
}=require('graphql');



//hardcoded data
//can come from any data source

const customers=[
    {id:'1',name:'Dilip', email:'dilip@gmail.com',age:30},
    {id:'2',name:'Dilip1', email:'dilip1@gmail.com',age:31},
    {id:'3',name:'Dili2', email:'dilip2@gmail.com',age:32},
    {id:'4',name:'Dilip3', email:'dilip3@gmail.com',age:33},
    {id:'5',name:'Dilip4', email:'dilip4@gmail.com',age:34}
];

//Queries


//Customer 

const Customer=new GraphQLObjectType({
    name:'Customer',
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        age:{type:GraphQLInt}
    })
});

//Root Query

const RootQuery=new GraphQLObjectType({
    name:'RootQuery',
    fields:{
        customer:{
            type:Customer,
            args:{
                id:{type:GraphQLString}
            },
            resolve(parentValue,args){
                for(let i=0;i<customers.length;i++){
                    if(customers[i].id===args.id){
                        return customers[i];
                    }
                }
                
            }
        }
    }
});


module.exports=new GraphQLSchema({
query:RootQuery
});