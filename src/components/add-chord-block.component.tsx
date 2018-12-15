import * as React from "react";
import { IChordPropsModel } from 'src/models/chord-block.props.model';

export class AddChordBlockComponent extends React.Component<{
    addChord: any,
    chordList: IChordPropsModel[]
}> {

    public render() {
        return (
            <div>
                <button onClick={() => this.props.addChord(this.props.chordList)}>Add Chord</button>
            </div>
        );
    }

}
