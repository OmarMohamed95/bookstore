import {
    GraphQLSchema,
    GraphQLObjectType,
} from 'graphql';

// Queries
import BookQueries from '../queries/book'
import AuthorQueries from '../queries/author'
import GenreQueries from '../queries/genre'
import UserQueries from '../queries/user'
import AuthQueries from '../queries/auth';

// Mutation
import Mutation from '../mutations/mutations'

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        ...BookQueries,
        ...AuthorQueries,
        ...GenreQueries,
        ...UserQueries,
        ...AuthQueries
    },
})

export default new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});