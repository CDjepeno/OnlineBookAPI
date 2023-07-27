import { IBook, BookDTO } from '../../../../Entities/Book'
import { IBookRepository } from '../../../../Repository/BookRepository'
import { AddBookResponse } from './AddBookResponse'

export class AddBook {
    constructor(private repository: IBookRepository) {}

    async execute(request: BookDTO) {
        try {
            const response = new AddBookResponse()
            
            const book = new BookDTO(
                request.name,
                request.description,
                request.author,
                request.releaseAt,
                request.imageUrl,
                request.fileUrl,
                request.approved,
                request.userId,
                request.categoryId
            )

            await this.repository.addBook(book)

            response.message = 'Le book a bien été ajouté'
            return response

        } catch (error: any) {
            throw new Error(error)
        }
    }
}
