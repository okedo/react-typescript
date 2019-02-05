import { GET_SONG_SUCCESS } from "./../actions/load-song.action";
import { IAction } from "./../models/action.model";

const initialState = {
  text: "",
  title: "",
  chordLists: []
};

export function pageReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case GET_SONG_SUCCESS:
      return {
        ...state,
        title: action.payload.title,
        text: action.payload.text
      };
    default:
      return state;
  }
}
