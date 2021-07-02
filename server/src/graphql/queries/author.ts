import {
    GraphQLInt,
    GraphQLID,
    GraphQLList,
} from 'graphql';
import AuthorType from '../types/author';
import AuthorResolver from '../../resolvers/AuthorResolver';

const authorResolver = new AuthorResolver();

const AuthorQueries = {
    author: {
        type: AuthorType,
        args: {id: {type: GraphQLID}},
        resolve(parent: any, args: any) {
            return authorResolver.getAuthorById(args.id);
        },
    },
    authors: {
        type: GraphQLList(AuthorType),
        args: {limit: {type: GraphQLInt}},
        resolve: (parent: any, args: any) => {
            return authorResolver.getAuthors({}, args)
        }
    },
}

export default AuthorQueries;