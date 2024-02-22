import { gql } from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
    query getAllCategories {
          award_categories {
            id
            name
            cover
            description
            note
            amount
          }
    }
`;