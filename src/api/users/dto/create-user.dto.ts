import { UserTrackEnum } from '../enums/user-track.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  email: string;

  @ApiProperty({ type: String, enum: UserTrackEnum })
  track: UserTrackEnum;

  @ApiProperty({ type: Number })
  yearsOfExperience: number;

  @ApiProperty({ type: [String] })
  tools: string[];
}
