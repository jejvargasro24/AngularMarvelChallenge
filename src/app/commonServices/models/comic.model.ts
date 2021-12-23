import { Image } from "./image.model";

export class Comic{
  id: number;
  title: string;
  description: string;
  modified: Date;
  thumbnail: Image;
}
