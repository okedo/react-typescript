import { IStore } from "../models/store.model";

const initialState: IStore = {
  text: "some text",
  chords: [
    {
      id: "1",
      name: "AM",
      startString: 1,
      structure: {
        strings: {
          sixthString: [],
          fifthString: [],
          fourthString: [],
          thirdString: [3],
          secondStrind: [4],
          firstString: [2]
        }
      }
    }
  ]
};

export function pageReducer(state = initialState) {
  return state;
}
