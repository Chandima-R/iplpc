import { gql } from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
    query getAllCategories {
        awardCategory {
            cover
            description
            id
            name
            note
            tips {
                  id
                  tip
                }
          }
    }

`;

export const GET_CATEGORY_BY_ID = gql`
    query getCategoryById($_eq: uuid) {
          awardCategory(where: {id: {_eq: $_eq}}) {
                cover
                description
                id
                name
                note
                tips {
                      id
                      tip
                }   
          }
    }
`;