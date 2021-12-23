import { Character } from "./character.model";
import { Comic } from "./comic.model";

export class DataContainer {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Array<any>;
}
