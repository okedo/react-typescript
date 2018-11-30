import { IChordStructure } from "./chord-structure.model";

export interface IChordModel {
  name: string;
  startString: number;
  structure: IChordStructure;
}
