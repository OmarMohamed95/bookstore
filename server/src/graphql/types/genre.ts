import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
} from 'graphql';
import BookResolver from '../../resolvers/BookResolver';
import BookType from './book';

const bookResolver = new BookResolver();

const GenreType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Genre',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        books: {
            type: new GraphQLList(BookType),
            resolve: (parent, args) => {
                return bookResolver.getBooks({
                    genreId: parent.id
                }, args);
            }
        }
    })
})

export default GenreType;