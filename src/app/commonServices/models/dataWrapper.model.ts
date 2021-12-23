import { DataContainer } from "./dataContainer.model";

export class DataWrapper {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: DataContainer;
  etag: string;
}
