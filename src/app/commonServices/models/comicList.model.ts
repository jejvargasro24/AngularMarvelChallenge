import { ComicSumary } from "./comicSumary.model";

export class ComicList {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<ComicSumary>;
}
