import {
    GraphQLString,
} from 'graphql';
import AuthResolver from '../../resolvers/AuthResolver';
import AuthDataType from '../types/authData';

const authResolver = new AuthResolver();

const AuthQueries = {
    login: {
        type: AuthDataType,
        args: {
            email: {
                type: GraphQLString
            },
            password: {
                type: GraphQLString
            }
        },
        resolve: (parent: any, args: any) => {
            return authResolver.login(args)
        }
    },
}

export default AuthQueries;