import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  author: string;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty()
  releaseAt: Date;

  @IsNotEmpty()
  @ApiProperty()
  @IsUrl()
  coverImage: string;

  @IsNotEmpty()
  @IsInt()
  userId: number;
}
