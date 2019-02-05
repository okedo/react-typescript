import { ADD_CHORD } from "./../actions/add-chord.action";
import { IAction } from "./../models/action.model";
import { basicChords } from "./basic-chords.constant";
const initialState = {
  chordList: ["A", "B"],
  basicChords: [...basicChords],
  text: "song text"
};

export function chordListReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case ADD_CHORD:
      return { ...state, chordList: action.payload };
    default:
      return state;
  }
}
