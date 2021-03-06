const {gql} = require('apollo-server');

module.exports = gql`
    type Query {
        sessions(
            id:ID,
            title:String,
            description:String,
            startsAt:String,
            endAt:String,
            room:Room,
            day:String,
            format:String,
            track:String,
            level:String
        ): [Session],
        sessionById(id:ID): Session
        speakers: [Speaker]
        speakerById(id:ID): Speaker
    }
    enum Room {
        EUROPA
        SOL
        SATURN
    }
    type Mutation {
        toggleFavoriteSession(id: ID): Session
        addNewSession(session: SessionInput): Session
    }
    type Speaker {
        id:ID!,
        bio:String,
        name:String
        sessions:[Session]
    }
    input SessionInput {
        title:String!,
        description:String,
        startsAt:String,
        endAt:String,
        room:String,
        day:String,
        format:String,
        track:String @deprecated(reason: "Some excuse."),
        level:String,
        favorite:Boolean
    }
    type Session {
        id:ID!,
        title:String!,
        description:String,
        startsAt:String,
        endAt:String,
        room:String,
        day:String,
        format:String,
        track:String @deprecated(reason: "Some excuse."),
        level:String,
        favorite:Boolean,
        speakers: [Speaker]
    }`
