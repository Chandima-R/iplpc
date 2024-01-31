import { gql } from "@apollo/client";

export const USERS = gql`
    query users {
        user {
            id
        }
    }  
`;