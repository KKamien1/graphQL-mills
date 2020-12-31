const sessions = require('../data/sessions.json')
const {DataSource} = require('apollo-datasource');
const _ = require('lodash');


class SessionAPI extends DataSource {
    constructor() {
        super()
    }

    initialize(config) {

    }

    getSessions(args) {
        console.log(sessions, args)

        return _.filter(sessions, args);
    }
    getSessionById(id) {
        
        console.log(sessions)
        
        const session = _.filter(sessions, {id: parseInt(id)});
        console.log('session', session, id)

        return session[0]
    }
}

module.exports = SessionAPI;