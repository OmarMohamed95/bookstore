import { Request, Response } from "express"
import Genre from "../models/genre"

class GenreResolver {

    getGenreById = (id: number) => {
        return Genre.findOne({
            where: {
                id: id
            }
        })
    }

    getGenres = (criteria: any, args: any) => {
        return Genre.findAll({
            where: criteria,
            limit: args.limit
        })
    }
}

export default GenreResolver;