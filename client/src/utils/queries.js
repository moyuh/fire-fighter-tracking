import { gql } from '@apollo/client';
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      password
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
