'use client'

import client from "@/utils/apolloClient";
import {ApolloProvider} from "@apollo/client";

// @ts-ignore
export const Provider = ({ children }) => {
    return(
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}