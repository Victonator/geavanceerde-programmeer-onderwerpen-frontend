import {Serie} from "./serie";

export interface Studio {
  id: number;
  name: string;
  seriesAmount: number;
  series: Serie[];
}
