const {ApolloServer} = require('apollo-server');
const SessionAPI = require('./datasources/sessions');

const dataSources = () => ({
    sessionAPI: new SessionAPI()
})

const typeDefs = require('./schema.js');
const resolvers = require('./resolvers')




const server = new ApolloServer({typeDefs, resolvers, dataSources});

server.listen({port:3500}).then(({url}) => {
    console.log(`graphQL running as ${url}`)
})