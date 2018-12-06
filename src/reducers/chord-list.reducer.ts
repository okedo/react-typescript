import { IChordListProps } from './../models/chord-list.props.model';
const initialState: IChordListProps = {
  chordList: [
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
    {
      id: "3",
      name: "F",
      startString: 1,
      structure: {
        strings: {
          sixthString: [1],
          fifthString: [1,3],
          fourthString: [1,3],
          thirdString: [1,2],
          secondStrind: [1],
          firstString: [1]
        }
      }
    }
  ],
  text: "song text"
};

export function chordListReducer(state = initialState) {
  return state;
}
