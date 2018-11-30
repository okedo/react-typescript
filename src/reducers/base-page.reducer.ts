import { IStore } from "../models/store.model";

const initialState: IStore = {
  text: "some text",
  chords: [
    {
      name: "AM",
      startString: 1,
      structure: {
        strings: [
          [false, false, false],
          [false, false, false],
          [false, true, false],
          [true, false, false],
          [false, false, true],
          [false, false, false]
        ]
      }
    }
  ]
};

export function pageReducer(state = initialState) {
  return state;
}
