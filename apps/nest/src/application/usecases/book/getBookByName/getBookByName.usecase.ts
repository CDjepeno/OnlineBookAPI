import { BookRepository } from 'src/domaine/repositories/book.repository';
import { GetBookByNameResponse } from './getBookByName.response';

export class GetBookByNameUsecase {
  constructor(private readonly repository: BookRepository) {}
  async execute(nameBook: string): Promise<GetBookByNameResponse> {
    try {
      return await this.repository.getBookByName(nameBook);
    } catch (error) {
      throw error;
    }
  }
}
