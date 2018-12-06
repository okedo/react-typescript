import { IAction } from "./../models/action.model";
import { CHORD } from "./constants";

export function pageReducer(state: any, action: IAction) {
  switch (action.type) {
    case CHORD.MODIFY_CHORD:
      state.structure.strings[action.payload.key][action.payload.key2] = !state
        .structure.strings[action.payload.key][action.payload.key2];
      return { ...state };
    default:
      return state;
  }
}
