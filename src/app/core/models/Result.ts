import {Vote} from "./Vote";
import {ResultComment} from "../../../../../Dance1/Dance-merge/src/app/core/models/ResultComment";
import {Performance} from "../../../../../Dance1/Dance-merge/src/app/core/models/Performance";


export interface Result {
  idResultat: number;
  resultat: number;
  nombresvotes?: number;
  likes:number;
  dislikes:number;
  dateR: Date;
  resultatcommentaires?: ResultComment[];
  votes?: Vote[];
  performanceId?: Performance;

}
