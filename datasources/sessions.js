const sessions = require('../data/sessions.json')
const {DataSource} = require('apollo-datasource');
const _ = require('lodash');


class SessionAPI extends DataSource {
    constructor() {
        super()
    }

    initialize(config) { }

    getSessions(args) {
        return _.filter(sessions, args);
    }
    getSessionById(id) {        
        const session = _.filter(sessions, {id: parseInt(id)});
        throw new Error('From Session by ID')
        return session[0]
    }
    toggleFavoriteSession(id) {        
        const session = _.filter(sessions, {id: parseInt(id)});
        session[0].favourite = !session[0].favourite
        return session[0]
    }
    addSession(session) {        
        session.id = 12
        sessions.push(session)
        return session
    }
}

module.exports = SessionAPI;