import { gql } from '@apollo/client';
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      password
      event {
        id
        title
        startDate
        endDate
      }
    }
  }
`;

export const QUERY_EVENTS = gql`
  query {
    events {
      title
      startDate
      endDate
    }
  }
`;
