import { IChordPropsModel } from "./chord-block.props.model";

export interface IChordListProps {
  text: string;
  chordList: string[];
  basicChords: IChordPropsModel[];
  addChord: any;
}
