import { Request, Response } from "express"
import Book from "../models/book"

class BookResolver {

    getBookById = (id: number, req: Request) => {
        if (req.headers.isAuthenticated === 'false') {
            throw new Error('Unauthenticated')
        }

        return Book.findOne({
            where: {
                id: id
            }
        })
    }

    getBooks = (args: any, criteria: any = {}) => {
        return Book.findAll({
            where: criteria,
            limit: args.limit
        })
    }
}

export default BookResolver;