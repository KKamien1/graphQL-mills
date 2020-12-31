

module.exports = {
    Query: {
        sessions: (parent, args, {dataSources}, info) => {
            console.log(dataSources.sessionAPI.getSessions())
            return dataSources.sessionAPI.getSessions(args);
        },
        sessionsById: (parent, {id}, {dataSources}, info) => {
            return dataSources.sessionAPI.getSessionById(id);
        }
    }
}