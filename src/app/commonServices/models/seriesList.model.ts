import { SeriesSumary } from "./seriesSummary.model";

export class SeriesList {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<SeriesSumary>;
}
