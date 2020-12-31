const _ = require('lodash')

module.exports = {
    speakers: async (session, args, {dataSources}) => {
        const speakers = await dataSources.speakerAPI.getSpeakers();
        console.log(speakers)
        const returns = speakers.filter((speaker) => {
            return _.filter(session.speakers, {id:speaker.id}).length > 0;
        })
        return returns;
    } 
}