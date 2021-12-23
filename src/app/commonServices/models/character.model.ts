import { Url } from "./url.model";
import { Image } from "./image.model";
import { ComicList } from "./comicList.model";
import { SeriesList } from "./seriesList.model";
import { StoriesList } from "./storiesList.model";
import { EventsList } from "./eventsList.model";

export class Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Array<Url>;
  thumbnail: Image;
  comics: ComicList;
  stories: StoriesList;
  events: EventsList;
  series: SeriesList;
}
