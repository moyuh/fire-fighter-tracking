const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    password: String!
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User!
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth

    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
