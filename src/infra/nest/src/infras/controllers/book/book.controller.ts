import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AddBookUseCase } from 'src/application/usecases/book/AddBook/add.book.usecase';
import { UseCaseProxy } from 'src/infras/usecase-proxy/usecase-proxy';
import { UsecaseProxyModule } from 'src/infras/usecase-proxy/usecase-proxy.module';
import { CreateBookDto } from './book.dto';

@ApiTags('Books')
@Controller('books')
export class BookController {
  constructor(
    @Inject(UsecaseProxyModule.ADD_BOOK_USECASES_PROXY)
    private readonly addBookUsecaseProxy: UseCaseProxy<AddBookUseCase>,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Creates a Post',
  })
  async addBook(@Body() createBookDto: CreateBookDto) {
    try {
      console.log(createBookDto);
      const result = await this.addBookUsecaseProxy
        .getInstance()
        .execute(createBookDto);
      console.log(result);
      return {
        status: 'Created',
        code: 201,
        message: 'Insert data success',
        data: result,
      };
    } catch (err) {
      throw err;
    }
  }
}
