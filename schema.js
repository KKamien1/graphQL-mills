const {gql} = require('apollo-server');

module.exports =  gql`

type Query {
    sessions(
        id: ID
        title: String
        description: String
        startsAt: String
        endsAt: String
        room: String
        day: String
        format: String
        track: String
        level: String
        ): [Session],

    sessionsById(id:ID): Session
    speakers: [Speaker]
    speakerById(id:ID): Speaker 
}

type Mutation {
    toggleFavouriteSession(id:ID): Session
    addNewSession(session: SessionInput): Session
}
type Speaker {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
}

enum Room {
    Europa
    Sol
    Jupiter
}

input SessionInput {
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: Room
    day: String
    format: String
    track: String
    level: String
    favourite: Boolean
}

type Session {
    id: ID
    title: String
    description: String
    startsAt: String
    endsAt: String
    room: Room
    day: String
    format: String
    track: String
    level: String
    favourite: Boolean
    speakers: [Speaker]
}


`