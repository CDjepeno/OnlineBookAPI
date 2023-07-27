import { IBookRepository } from "../../../../Repository/BookRepository"
import { GetBookResponse } from "./GetBookResponse"


export class GetBook {
    constructor(private repository: IBookRepository) {}

    async execute(request: number) {
        try {
            const response = new GetBookResponse()
            response.book = await this.repository.getBook(request)
            return response.book

        } catch (error: any) {
            throw new Error(error)
        }
    }
}
