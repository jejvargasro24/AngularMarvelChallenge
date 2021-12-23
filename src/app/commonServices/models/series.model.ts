import { Image } from "./image.model";

export class Series{
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  rating: string;
  thumbnail: Image;
}
