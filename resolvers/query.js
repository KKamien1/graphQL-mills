
module.exports = {
        sessions: (parent, args, {dataSources}, info) => {
            console.log(dataSources.sessionAPI.getSessions())
            return dataSources.sessionAPI.getSessions(args);
        },
        sessionsById: (parent, {id}, {dataSources}, info) => {
            return dataSources.sessionAPI.getSessionById(id);
        },
        speakers: (parent, args, {dataSources}, info) => {
            return dataSources.speakerAPI.getSpeakers();
        },
        speakerById: (parent, {id}, {dataSources}, info) => {
            return dataSources.speakerAPI.getSpeakerById(id);
        }
}