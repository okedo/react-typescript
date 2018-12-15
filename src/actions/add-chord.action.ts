import { IChordPropsModel } from "src/models/chord-block.props.model";

const ADD_CHORD = "ADD_CHORD";

function addChord(chordList: IChordPropsModel[]) {
    const newChordList = [...chordList, {
        id: '', name: '',
        structure: {
            strings: { firstString: [], secondStrind: [], thirdString: [], fourthString: [], fifthString: [], sixthString: [] }
        },
        startString: 0
    }];
    return {
        type: ADD_CHORD,
        payload: newChordList
    };
}

export {
    addChord,
    ADD_CHORD
}