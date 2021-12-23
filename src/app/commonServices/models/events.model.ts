import { Image } from "./image.model";

export class Events{
  id: number;
  title: string;
  description: string;
  start: Date;
  end: Date;
  resourceURI: string;
  thumbnail: Image;
}
