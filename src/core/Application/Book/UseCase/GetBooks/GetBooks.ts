import { IBookRepository } from '../../../../Repository/BookRepository'
import { GetBooksResponse } from './GetBooksResponse'

export class GetBooks {
    constructor(private repository: IBookRepository) {}

    async execute() {
        try {
            const response = new GetBooksResponse()
            response.books = await this.repository.getBooks()
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
}
