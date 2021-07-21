import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
} from 'graphql';

const UserType: GraphQLObjectType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type: GraphQLID},
        username: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString}
    })
})

export default UserType;