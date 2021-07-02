import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
} from 'graphql';
import BookResolver from '../../resolvers/BookResolver';
import BookType from './book'

const bookResolver = new BookResolver();

const AuthorType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        books: {
            type: new GraphQLList(BookType),
            resolve: (parent, args) => {
                return bookResolver.getBooks({
                    authorId: parent.id
                }, args);
            }
        }
    })
})

export default AuthorType;