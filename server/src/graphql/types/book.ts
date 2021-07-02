import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
} from 'graphql';
import GenreType from './genre';
import AuthorType from './author';
import AuthorResolver from '../../resolvers/AuthorResolver';
import GenreResolver from '../../resolvers/GenreResolver';

const authorResolver = new AuthorResolver();
const genreResolver = new GenreResolver();

const BookType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        user: {type: GraphQLString},
        price: {type: GraphQLInt},
        pagesCount: {type: GraphQLInt},
        author: {
            type: AuthorType,
            resolve: (parent, args) => {
                return authorResolver.getAuthorById(parent.authorId);
            }
        },
        genre: {
            type: GenreType,
            resolve: (parent, args) => {
                return genreResolver.getGenreById(parent.genreId);
            }
        },
    })
})

export default BookType;