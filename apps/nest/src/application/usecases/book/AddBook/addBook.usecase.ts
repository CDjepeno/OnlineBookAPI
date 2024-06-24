import { BookEntity } from "src/domaine/entities/Book.entity";
import { BookRepository } from "src/domaine/repositories/book.repository";
import { AwsS3Client } from "src/infras/clients/aws/aws-s3.client";
import { AddBookRequest } from "./addBook.request";
import { AddBookResponse } from "./addBook.response";


export class AddBookUseCase {
  constructor(
    private readonly bookRepository: BookRepository,
    private readonly awsS3Client: AwsS3Client,
  ) {}

  async execute(request: AddBookRequest): Promise<AddBookResponse> {
    try {
      const coverUrl = await this.awsS3Client.uploadFile(request.coverFile);

      const book = new BookEntity(
        request.id,
        request.name,
        request.description,
        request.author,
        request.releaseAt,
        coverUrl,
        request.userId,
      );
      const res = await this.bookRepository.addBook(book);

      return res;
    } catch (error) {
      throw new Error(error);
    }
  }
}
