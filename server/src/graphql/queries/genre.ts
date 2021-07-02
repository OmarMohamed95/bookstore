import {
    GraphQLInt,
    GraphQLID,
    GraphQLList,
} from 'graphql';
import GenreType from '../types/genre';
import GenreResolver from '../../resolvers/GenreResolver';

const genreResolver = new GenreResolver();

const GenreQueries = {
    genre: {
        type: GenreType,
        args: {id: {type: GraphQLID}},
        resolve(parent: any, args: any) {
            return genreResolver.getGenreById(args.id);
        },
    },
    genres: {
        type: GraphQLList(GenreType),
        args: {limit: {type: GraphQLInt}},
        resolve: (parent: any, args: any) => {
            return genreResolver.getGenres({}, args)
        }
    }
}

export default GenreQueries;