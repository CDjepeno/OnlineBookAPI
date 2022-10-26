import { BookDTO } from "../entities/Book"
import { ValidationError } from "class-validator"

export interface BookRepository {

  addBook(book: BookDTO): Promise<string | ValidationError[]>
  getBook(id: number): Promise<BookDTO>
  getBooks(): Promise<BookDTO>
  editBook(id: number, body: BookDTO): Promise<string | ValidationError>
  deleteBook(id: number)
}