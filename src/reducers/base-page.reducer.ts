import { IStore } from "../models/store.model";

const initialState: IStore = {
  text: "some text",
  chords: [
    {
        id: "2",
        name: "C",
        startString: 1,
        structure: {
          strings: {
            sixthString: [],
            fifthString: [3],
            fourthString: [2],
            thirdString: [],
            secondStrind: [1],
            firstString: []
          }
        }
      },
      {
        id: "1",
        name: "AM",
        startString: 1,
        structure: {
          strings: {
            sixthString: [],
            fifthString: [],
            fourthString: [2],
            thirdString: [3],
            secondStrind: [1],
            firstString: []
          }
        }
      },
  ]
};

export function pageReducer(state = initialState) {
  return state;
}
