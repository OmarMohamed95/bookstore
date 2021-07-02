import {
    GraphQLInt,
    GraphQLID,
    GraphQLList,
} from 'graphql';
import BookType from '../types/book';
import BookResolver from '../../resolvers/BookResolver';

const bookResolver = new BookResolver();

const BookQueries = {
    book: {
        type: BookType,
        args: {id: {type: GraphQLID}},
        resolve(parent: any, args: any) {
            return bookResolver.getBookById(args.id);
        },
    },
    books: {
        type: GraphQLList(BookType),
        args: {limit: {type: GraphQLInt}},
        resolve: (parent: any, args: any) => {
            return bookResolver.getBooks({}, args)
        }
    }
}

export default BookQueries;