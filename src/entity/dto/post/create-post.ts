import {IsString} from "class-validator";

export class CreatePost{

  @IsString()
  name!: string
}