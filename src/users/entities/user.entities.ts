import { ApiProperty } from '@nestjs/swagger';

// định nghĩa kiểu data thao tác với user
export class User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
