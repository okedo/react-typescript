import { IChordPropsModel } from "src/models/chord-block.props.model";

const ADD_CHORD = "ADD_CHORD";

function addChord(chordList: IChordPropsModel[], selectedChord: IChordPropsModel) {
    const newChord = { ...selectedChord };
    let maxId: number = 0;
    chordList.map(el => {
        maxId = parseInt(el.id, 0) >= maxId ? parseInt(el.id, 0) : maxId;
    });
    maxId++;

    newChord.id = maxId.toString();
    const newChordList = [...chordList, { ...newChord }];
    return {
        type: ADD_CHORD,
        payload: newChordList
    };
}

export {
    addChord,
    ADD_CHORD
}