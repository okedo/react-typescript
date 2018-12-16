import * as React from "react";
import { IAddChordProps } from './../models/add-chord.props.model';
import { IChordPropsModel } from './../models/chord-block.props.model';

export class AddChordBlockComponent extends React.Component<IAddChordProps, { selectedChord: IChordPropsModel }> {

    private constructor(props: IAddChordProps) {
        super(props);
        this.state = {
            selectedChord: this.props.chordList[0]
        };
    }

    public render() {
        return (
            <div>
                <button onClick={() => this.props.addChord(this.props.chordList, this.state.selectedChord)}>Add Chord</button>
                <select>
                    {this.props.basicChords.map((el: IChordPropsModel) => {
                        return (<option onClick={() => this.handleClick(el)} key={el.id}> {el.name}</option>)
                    })}
                </select>
            </div>
        );
    }

    private handleClick(el: IChordPropsModel): void {
        this.setState({ selectedChord: el });
    }
}
