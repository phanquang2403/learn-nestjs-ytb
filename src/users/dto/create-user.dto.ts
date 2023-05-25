import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsInt, MaxLength } from 'class-validator';

// định nghĩa dto cho user
export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(20)
  name: string;

  @ApiProperty({ required: false })
  @IsInt()
  @MaxLength(3)
  age?: number;
}
