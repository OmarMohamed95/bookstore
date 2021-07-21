import {
    GraphQLInt,
    GraphQLID,
    GraphQLList,
} from 'graphql';
import UserType from '../types/user';
import UserResolver from '../../resolvers/UserResolver';

const userResolver = new UserResolver();

const UserQueries = {
    user: {
        type: UserType,
        args: {id: {type: GraphQLID}},
        resolve(parent: any, args: any) {
            return userResolver.getUserById(args.id);
        },
    },
    users: {
        type: GraphQLList(UserType),
        args: {limit: {type: GraphQLInt}},
        resolve: (parent: any, args: any) => {
            return userResolver.getUsers(args)
        }
    }
}

export default UserQueries;