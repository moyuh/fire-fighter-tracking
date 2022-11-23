const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    username: String!
    password: String!
  }
  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    
  }

  type Mutation {
    addUser(
      username: String!
      password: String!
    ): Auth,

    login(
      username: String!, 
      password: String!
      ): Auth
  }
`;

module.exports = typeDefs;


