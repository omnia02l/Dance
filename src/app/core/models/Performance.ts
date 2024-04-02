import { Time } from "@angular/common";
import { Competition } from "./Competition";
import { Music } from "./Music";
import { Reward } from "./Reward";

export interface Performance {
  idperf?: number;
  perfdate?: Date;
  starttime?: Time;
  endtime?: Time;
  pdescreption?: string;
  perftitle?: string;
  teamimage?: string;
  competition?: Competition;
  music?: Music;
  votes?: any;
  rewards?: Reward[];
}
