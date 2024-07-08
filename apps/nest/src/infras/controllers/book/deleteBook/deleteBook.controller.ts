import {
  Controller,
  Delete,
  Inject,
  InternalServerErrorException,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteBookUsecase } from 'src/application/usecases/book/deleteBook/deleteBook.usecase';
import { UseCaseProxy } from 'src/infras/usecase-proxy/usecase-proxy';
import { UsecaseProxyModule } from 'src/infras/usecase-proxy/usecase-proxy.module';

@ApiTags('Book')
@Controller('book')
export class DeleteBookController {
  constructor(
    @Inject(UsecaseProxyModule.DELETE_BOOK_USECASE_PROXY)
    private readonly deleteBookUsecaseProxy: UseCaseProxy<DeleteBookUsecase>,
  ) {}

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete Book',
  })
  async deleteBook(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ message: string }> {
    try {
      await this.deleteBookUsecaseProxy.getInstance().execute(id);
      return { message: `Le livre avec l'id ${id} a bien été supprimé.` };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Impossible de supprimer le livre.',
        );
      }
    }
  }
}
