const sessions = require('../data/sessions.json');
const {DataSource} = require('apollo-datasource');
const _ = require('lodash');

class SessionAPI extends DataSource {
    constructor(){
        super();
    }

    initialize(config) {}

    getSessions(args){
        const session = _.filter(sessions, args);
        return session
    }

    getSessionById(id) {
        const session = _.filter(sessions, { id: parseInt(id) });
        return session[0];
    }

    toggleFavoriteSession(id) {
        const session = _.filter(sessions, { id: parseInt(id) });
        session[0].favorite = !session[0].favorite;
        return session[0];
    }

    addSession(session) {
        session.id = 12;
        sessions.push(session);
        return session;
    }
}

module.exports = SessionAPI;
