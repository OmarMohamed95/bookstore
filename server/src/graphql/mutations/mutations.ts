import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
} from 'graphql';

// Types
import UserType from '../types/user';

// Resolvers
import AuthResolver from '../../resolvers/AuthResolver';
import AuthDataType from '../types/authData';

const authResolver = new AuthResolver();

export default new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        register: {
            type: AuthDataType,
            args: {
                username: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (parent, args) => {
                return authResolver.register(args);
            }
        }
    })
});