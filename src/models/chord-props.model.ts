import { IChordStructure } from "./chord-structure.model";

export interface IChordModel {
  id: string;
  name: string;
  startString: number;
  structure: IChordStructure;
}
