import { IChordPropsModel } from "./chord-block.props.model";

export interface IChordListProps {
  text: string;
  chordList: IChordPropsModel[];
  basicChords: IChordPropsModel[];
  addChord: any;
}
