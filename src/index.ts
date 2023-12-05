import { GraphQLClient } from 'graphql-request';
import { getSdk } from './query.generated';

const client = new GraphQLClient("https://api.spacex.land/graphql/")
const result = await getSdk(client).OffersQuery({
    limit: 100,
    createdAtTo: 'asd'
});