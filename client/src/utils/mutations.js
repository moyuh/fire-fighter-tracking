import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent(
    $eventId: String!
    $title: String!
    $startDate: String!
    $endDate: String!
  ) {
    addEvent(
      eventId: $eventId
      title: $title
      startDate: $startDate
      endDate: $endDate
    ) {
      _id
      username
      password
      event {
        eventId
        title
        startDate
        endDate
      }
    }
  }
`;
