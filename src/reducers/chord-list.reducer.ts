import { ADD_CHORD } from "./../actions/add-chord.action";
import { GET_CHORD_SUCCESS } from "./../actions/upload-chords.action";
import { IAction } from "./../models/action.model";
import { basicChords } from "./basic-chords.constant";
const initialState = {
  chordList: [],
  basicChords: [...basicChords],
  text: ""
};

export function chordListReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case ADD_CHORD:
      return { ...state, chordList: action.payload };

    case GET_CHORD_SUCCESS: {
      return { ...state, chordList: action.payload };
    }
    default:
      return state;
  }
}
