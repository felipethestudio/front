import { gql } from "@apollo/client";

export const GRAPHQL_QUERY = gql`
  query {
    post(id: "1") {
      id
      title
      body
    }
  }
`;
