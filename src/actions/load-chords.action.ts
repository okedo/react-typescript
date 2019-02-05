import { IChordPropsModel } from "../models/chord-block.props.model";
import { basicChords } from "../reducers/basic-chords.constant";
import { generateCanvasId } from "./id-generator";
export const getChord = (chordlist: string[]) => {
  return (dispatch: any) => {
    // fetch("getData", {
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   method: "GET"
    // })
    new Promise(resolve => {
      resolve({ body: ["Am", "F", "Am"], ok: true, statusText: "text" });
    }).then((res: { body: []; ok: boolean; statusText: string }) => {
      if (res.ok) {
        const tempChordList = [...chordlist, ...res.body];
        dispatch(getChordSuccess(fillchordList(tempChordList)));
      } else {
        dispatch(getChordFailure(res.statusText));
      }
    });
  };
};

const fillchordList = (chords: string[]) => {
  const parsedChords: IChordPropsModel[] = [];
  chords.map(chordName => {
    const tempChord = basicChords.find(el => el.name === chordName);
    if (tempChord) {
      const chord = {
        ...tempChord,
        templateId: generateCanvasId(tempChord.id)
      };
      parsedChords.push(chord);
    }
  });
  return parsedChords;
};

export const GET_CHORD_SUCCESS = "GET_CHORD_SUCCESS";
export const GET_CHORD_FAILURE = "GET_CHORD_FAILURE";

const getChordSuccess = (data: any) => ({
  type: GET_CHORD_SUCCESS,
  payload: data
});

const getChordFailure = (error: any) => ({
  type: GET_CHORD_FAILURE,
  payload: error
});
