import { UserTrackEnum } from '../enums/user-track.enum';

export class CreateUserDto {
  name: string;

  email: string;

  track: UserTrackEnum;

  yearsOfExperience: number;

  tools: string[];
}
