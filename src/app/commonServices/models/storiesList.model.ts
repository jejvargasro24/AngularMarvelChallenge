import { StoriesSumary } from "./storiesSummary.model";

export class StoriesList {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<StoriesSumary>;
}
