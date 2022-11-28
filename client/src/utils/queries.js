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

// export const QUERY_USER = gql`
//   {
//     user {
//         username
//         password
//     }
//   }
// `;
