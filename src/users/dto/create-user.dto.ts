import { ApiProperty } from '@nestjs/swagger';

// định nghĩa dto cho user
export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  age?: number;
}
