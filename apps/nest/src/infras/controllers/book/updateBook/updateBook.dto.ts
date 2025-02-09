import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class UpdateBookDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nom du livre' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Description du livre' })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: "Nom de l'auteur du livre" })
  author: string;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty({ description: 'Date de publication du livre' })
  releaseAt: Date;

  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({ description: 'URL de la couverture du livre' })
  coverUrl: string;
}
