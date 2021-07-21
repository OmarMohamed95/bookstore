import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} from 'graphql';
import UserType from './user';
import AuthResolver from '../../resolvers/AuthResolver';

const authResolver = new AuthResolver();

const AuthDataType: GraphQLObjectType = new GraphQLObjectType({
    name: 'AuthDate',
    fields: () => ({
        user: {
            type: UserType,
            resolve: (parent, args) => {
                return authResolver.getUserByToken(parent.token);
            }
        },
        token: {type: GraphQLString},
        ttl: {type: GraphQLInt},
    })
})

export default AuthDataType;