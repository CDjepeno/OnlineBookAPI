import { ValidationError } from 'class-validator';
import { BookDTO } from '../Entities/Book';

export interface IBookRepository {

    addBook(book: BookDTO): Promise<string | ValidationError[]>
    getBook(id: number): Promise<BookDTO>
    getBooks(): Promise<BookDTO[]>
    updateBook(id: number, body: BookDTO): Promise<string>
    deleteBook(id: number)
}   