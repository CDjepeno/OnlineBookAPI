import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Inject,
  InternalServerErrorException,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AddBookUseCase } from 'src/application/usecases/book/AddBook/addBook.usecase';
import { badrequestexception } from 'src/domaine/errors/book.error';
import { JwtAuthGuard } from 'src/infras/common/guards/jwt-auth.guard';
import { UseCaseProxy } from 'src/infras/usecase-proxy/usecase-proxy';
import { UsecaseProxyModule } from 'src/infras/usecase-proxy/usecase-proxy.module';
import { CreateBookDto } from './addBook.dto';

@ApiTags('Books')
@Controller('books')
export class AddBookController {
  constructor(
    @Inject(UsecaseProxyModule.ADD_BOOK_USECASE_PROXY)
    private readonly addBookUsecaseProxy: UseCaseProxy<AddBookUseCase>,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('coverFile'))
  @ApiOperation({
    summary: 'Creates a Post',
  })
  async addBook(
    @Body() createBookDto: CreateBookDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: /.(png|jpe?g)$/ })
        .addMaxSizeValidator({ maxSize: 1048576 })
        .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
    )
    coverFile: Express.Multer.File,
  ) {
    try {
      if (!coverFile) {
        throw new BadRequestException('Cover file is required');
      }

      const result = await this.addBookUsecaseProxy
        .getInstance()
        .execute({ ...createBookDto, coverFile });

      console.log('Book created successfully:', result);

      return {
        status: 'Created',
        code: 201,
        message: 'Data inserted successfully',
        data: result,
      };
    } catch (error) {
      console.error('Error occurred while creating book:', error);

      if (error instanceof badrequestexception) {
        throw new badrequestexception(error.message);
      }
      throw new InternalServerErrorException('Failed to create book');
    }
  }
}
