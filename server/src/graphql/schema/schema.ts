import {
    GraphQLSchema,
    GraphQLObjectType,
} from 'graphql';

// Queries
import BookQueries from '../queries/book'
import AuthorQueries from '../queries/author'
import GenreQueries from '../queries/genre'

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        ...BookQueries,
        ...AuthorQueries,
        ...GenreQueries,
    },
})

export default new GraphQLSchema({
    query: RootQuery,
    // mutation: Mutation
});