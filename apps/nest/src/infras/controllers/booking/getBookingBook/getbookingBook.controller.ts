import {
  BadRequestException,
  ConflictException,
  Controller,
  Get,
  Inject,
  InternalServerErrorException,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UseCaseProxy } from 'src/infras/usecase-proxy/usecase-proxy';
import { UsecaseProxyModule } from 'src/infras/usecase-proxy/usecase-proxy.module';
import { GetBookingsBookUseCase } from 'src/application/usecases/booking/getBookings/getBookingsBook.usecase';

@ApiTags('Booking')
@Controller('/bookings/book')
export class GetBookingBookController {
  constructor(
    @Inject(UsecaseProxyModule.GET_BOOKINGS_BOOK_USECASE_PROXY)
    private readonly getBookingsBookUsecaseProxy: UseCaseProxy<GetBookingsBookUseCase>,
  ) {}

  @Get(':id')
  @ApiOperation({
    summary: 'get Bookings for a Book',
  })
  async getbookingsBook(
    @Param('id', ParseIntPipe) bookId: number,
  ) {
    try {
      
      return await this.getBookingsBookUsecaseProxy
        .getInstance()
        .execute(bookId);

    } catch (error) {
      console.error('Error occurred while getbooking book:', typeof error);
      if (error instanceof BadRequestException || error instanceof ConflictException) {
        
        throw error;
      }
     
      throw new InternalServerErrorException('Failed to booking book');
    }
  }
}
