import { Row } from "./row.model";

export class Place {
 
  idPlace?: number;
  temporaryId?  :number;
  seatNumber?: string; // Utilisez string si vous avez des sièges comme 'A1', 'B2', etc.
  row?: string;
  isOccupied?: boolean;
  isSelected?: boolean;
  }