import { Image } from "./image.model";

export class Stories {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  thumbnail: Image;
}
