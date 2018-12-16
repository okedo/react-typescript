import { IChordPropsModel } from "src/models/chord-block.props.model";

const ADD_CHORD = "ADD_CHORD";

function addChord(chordList: IChordPropsModel[], selectedChord: IChordPropsModel) {
    const newChordList = [...chordList, { ...selectedChord }];
    return {
        type: ADD_CHORD,
        payload: newChordList
    };
}

export {
    addChord,
    ADD_CHORD
}