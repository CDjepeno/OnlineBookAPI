import { NotFoundError } from 'src/domaine/errors/book.error';
import { BookRepository } from 'src/domaine/repositories/book.repository';
import { GetBooksByUserResponse } from './getBooksByUser.response';

export class GetBooksByUserUsecase {
  constructor(private readonly repository: BookRepository) {}

  async execute(userId: number): Promise<GetBooksByUserResponse[]> {
    try {
      return await this.repository.getBooksByUser(userId);
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des livres pour l'utilisateur :",
        error,
      );
      if (error instanceof NotFoundError) {
        throw new Error(
          `Aucun livre trouvé pour l'utilisateur avec l'ID ${userId}.`,
        );
      } else {
        throw new Error(
          `Échec de la récupération des livres pour l'utilisateur avec l'ID ${userId}. Veuillez réessayer plus tard.`,
        );
      }
    }
  }
}
