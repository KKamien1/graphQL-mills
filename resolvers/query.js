
module.exports = {
        sessions: (parent, args, {dataSources}, info) => {
            console.log(dataSources.sessionAPI.getSessions())
            return dataSources.sessionAPI.getSessions(args);
        },
        sessionsById: (parent, {id}, {dataSources}, info) => {
            try {
                return dataSources.sessionAPI.getSessionById(id);
                
            } catch (error) {
                return {code: 'Error', message: 'An error occured', token:'hardcoded'}
            }
        },
        speakers: (parent, args, {dataSources}, info) => {
            return dataSources.speakerAPI.getSpeakers();
        },
        speakerById: (parent, {id}, {dataSources}, info) => {
            return dataSources.speakerAPI.getSpeakerById(id);
        }
}