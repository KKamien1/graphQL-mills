const {ApolloServer, ApolloError} = require('apollo-server');
const SessionAPI = require('./datasources/sessions');
const SpeakerAPI = require('./datasources/speakers');

const dataSources = () => ({
    sessionAPI: new SessionAPI(),
    speakerAPI: new SpeakerAPI(),
})

const typeDefs = require('./schema');
const resolvers = require('./resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    debug: false,
    formatError: (err) => {
        if (err.extensions.code == "INTERNAL_SERVER_ERROR") {
            return new ApolloError("We are having some trouble", "ERROR", {token: 'uniquetoken'})
        }
    }
});

server.listen({port:3555}).then(({url}) => {
    console.log(`graphQL running as ${url}`)
})