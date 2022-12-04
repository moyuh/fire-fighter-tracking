const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    password: String!
    event: [Event]!
  }
  type Event {
    _id: ID
    id: String
    title: String
    startDate: String
    endDate: String
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User!
    user(_id: ID!): User
    # events: [Event]!
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    addEvent(
      id: String!
      title: String!
      startDate: String!
      endDate: String!
    ): User
    # addEvent(title: String!, startDate: String!, endDate: String!): Event
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
