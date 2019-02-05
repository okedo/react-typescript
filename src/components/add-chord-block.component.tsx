import * as React from "react";
import { style } from "typestyle/lib";
import { IAddChordProps } from "./../models/add-chord.props.model";
import { IAddChordState } from "./../models/add-chord.state.model";
import { IChordPropsModel } from "./../models/chord-block.props.model";

export class AddChordBlockComponent extends React.Component<
  IAddChordProps,
  IAddChordState
> {
  private readonly listElementStyle = style({
    padding: "5px",
    margin: "5px",
    border: "solid 1px black",
    display: "block",
    textAlign: "center"
  });

  private readonly buttonStyle = style({
    padding: "5px",
    margin: "10px",
    background: "white",
    border: "solid 1px black",
    display: "inline-block"
  });

  private readonly addChordContainerStyle = style({
    display: "inline-block",
    width: "80px",
    height: "148px",
    padding: "5px",
    margin: "20px",
    border: "solid 1px black",
    textAlign: "center",
    verticalAlign: "top"
  });

  private readonly listStyle = style({
    position: "absolute",
    marginLeft: "-24px",
    backgroundColor: "white",
    display: "inline-block",
    padding: "3px",
    border: "solid 1px black",
    textAlign: "center"
  });

  private constructor(props: IAddChordProps) {
    super(props);
    this.state = {
      selectedChord: this.props.basicChords[0],
      collapsedList: true
    };
  }

  public render() {
    return (
      <div className={this.addChordContainerStyle}>
        <div onClick={() => this.toggleListState()}>
          {this.state.collapsedList ? (
            <div className={this.listElementStyle}>
              {this.state.selectedChord.name}
            </div>
          ) : (
            <div className={this.listStyle}>
              {this.props.basicChords.map((el: IChordPropsModel) => {
                return (
                  <div
                    className={this.listElementStyle}
                    onClick={() => this.handleClick(el)}
                    key={el.id}
                  >
                    {el.name}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <button className={this.buttonStyle} onClick={() => this.addChord()}>
          Add Chord
        </button>
      </div>
    );
  }

  private addChord(): void {
    this.props.addChord(this.props.chordList, this.state.selectedChord);
  }

  private handleClick(el: IChordPropsModel): void {
    this.setState({ selectedChord: el });
  }

  private toggleListState(): void {
    this.setState({
      collapsedList: !this.state.collapsedList
    });
  }
}
