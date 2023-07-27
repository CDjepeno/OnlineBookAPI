import { BookDTO, IBook } from '../../../../Entities/Book'
import { IBookRepository } from '../../../../Repository/BookRepository'
import { UpdateBookResponse } from './UpdateBookResponse'

export class UpdateBook {
    constructor(private repository: IBookRepository) {}

    async execute(id: number, request: BookDTO) {
        try {
            const response = new UpdateBookResponse()
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
            await this.repository.updateBook(id, book)
            
            response.message = 'Le book a bien été modifié'
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
}
