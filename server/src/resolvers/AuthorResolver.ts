import { Request, Response } from "express"
import Author from "../models/author"

class AuthorResolver {

    getAuthorById = (id: number) => {
        return Author.findOne({
            where: {
                id: id
            }
        })
    }

    getAuthors = (criteria: any, args: any) => {
        return Author.findAll({
            where: criteria,
            limit: args.limit
        })
    }
}

export default AuthorResolver;