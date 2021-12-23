import { EventsSumary } from "./eventsSummary.model";

export class EventsList {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<EventsSumary>;
}
