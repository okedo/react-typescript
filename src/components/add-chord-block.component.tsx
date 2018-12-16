import * as React from "react";
import { style } from 'typestyle/lib';
import { IAddChordProps } from './../models/add-chord.props.model';
import { IChordPropsModel } from './../models/chord-block.props.model';

export class AddChordBlockComponent extends React.Component<IAddChordProps, { selectedChord: IChordPropsModel, collapsedList: boolean }> {

    private readonly listElementStyle = style({
        padding: "10px",
        border: "solid 1px black",
        display: "inline-block",
        width: "100px",
        textAlign: "center"
    })
    private readonly buttonStyle = style({
        background: "white",
        border: "solid 1px black"
    })

    private constructor(props: IAddChordProps) {
        super(props);
        this.state = {
            selectedChord: this.props.chordList[0],
            collapsedList: true
        };
    }

    public render() {
        return (
            <div>
                <div className={this.listElementStyle} onClick={() => this.toggleListState()}>
                    {this.state.collapsedList ? (
                        <div className={this.listElementStyle}>
                            {this.state.selectedChord.name}
                        </div>) : this.props.basicChords.map((el: IChordPropsModel) => {
                            return (<div onClick={() => this.handleClick(el)} key={el.id}> {el.name}</div>)
                        })}
                </div>
                <button className={this.buttonStyle} onClick={() => this.props.addChord(this.props.chordList, this.state.selectedChord)}>Add Chord</button>
            </div>
        );
    }

    private handleClick(el: IChordPropsModel): void {
        this.setState({ selectedChord: el });
    }

    private toggleListState(): void {
        this.setState({
            collapsedList: !this.state.collapsedList
        })
    }
}
