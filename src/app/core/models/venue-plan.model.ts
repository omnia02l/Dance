import { Place } from "./Place.model";
import { Row } from "./row.model";

export class VenuePlan {
    idPlan?: number;
    totalSeats?: number;
    places?: Place[];
    length_S?: number;   // Longueur de chaque place
    width_S?: number; 
   // seatStructure?: Map<Row, number>  // Largeur de chaque place
   seatStructure?: { [key: string]: number };
  }