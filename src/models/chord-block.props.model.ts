import { IChordStructure } from "./chord-structure.model";

export interface IChordPropsModel {
  id: string;
  name: string;
  startString: number;
  structure: IChordStructure;
}
