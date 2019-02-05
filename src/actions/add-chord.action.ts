import { IChordPropsModel } from "./../models/chord-block.props.model";
import { generateCanvasId } from "./id-generator";

const ADD_CHORD = "ADD_CHORD";

function addChord(
  chordList: IChordPropsModel[],
  selectedChord: IChordPropsModel
) {
  const newChord = {
    ...selectedChord,
    templateId: generateCanvasId(selectedChord.id)
  };
  const newChordList = [...chordList];
  newChordList.push(newChord);
  return {
    type: ADD_CHORD,
    payload: newChordList
  };
}

export { addChord, ADD_CHORD };
