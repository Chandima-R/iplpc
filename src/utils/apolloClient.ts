import {ApolloClient, InMemoryCache, split} from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import { WebSocketLink } from '@apollo/client/link/ws';
import {getMainDefinition} from '@apollo/client/utilities';

const GRAPHQL_API_URL = 'https://iplpc.hasura.app/v1/graphql';

const authHeader =
    'EhvjnFYUifRQE3zphllDCUj1k9Ih9CZSOZ2Ev3ZBJEuFCfCdLDHXEh4Z3SmXvgpr';

const httpLink = new HttpLink({
    uri: GRAPHQL_API_URL,
    headers: {
        'x-hasura-admin-secret': authHeader,
    },
});

const wsLink = new WebSocketLink({
    uri: 'wss://iplpc.hasura.app/v1/graphql',
    options: {
        reconnect: true,
        lazy: true,
        connectionParams: {
            headers: {
                'x-hasura-admin-secret': authHeader,
            },
        },
    },
});

// @ts-ignore
const link = split(
    ({query}) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

export default client;
