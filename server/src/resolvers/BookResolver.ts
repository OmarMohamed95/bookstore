import { Request, Response } from "express"
import Book from "../models/book"

class BookResolver {

    getBookById = (id: number) => {
        return Book.findOne({
            where: {
                id: id
            }
        })
    }

    getBooks = (criteria: any, args: any) => {
        return Book.findAll({
            where: criteria,
            limit: args.limit
        })
    }
}

export default BookResolver;