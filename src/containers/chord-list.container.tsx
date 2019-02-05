import * as React from "react";
import { connect } from "react-redux";
import { style } from "typestyle";
import { addChord } from "./../actions/add-chord.action";
import { makeIdEnding } from "./../actions/id-ending-creator";
import { AddChordBlockComponent } from "./../components/add-chord-block.component";
import { ChordBlockComponent } from "./../components/chord-block.component";
import { IChordPropsModel } from "./../models/chord-block.props.model";
import { IChordListProps } from "./../models/chord-list.props.model";
import { basicChords } from "./../reducers/basic-chords.constant";

class ChordList extends React.Component<IChordListProps> {
  private generalStyle = style({ color: "red" });
  public generateCanvasId(id: string) {
    return `canvas-${id}-${new Date().getMilliseconds}-${makeIdEnding()}`;
  }
  public render() {
    const { text, chordList } = this.props;
    return (
      <div>
        <div className={this.generalStyle}>{text}</div>
        <div>
          {this.fillchordList(chordList).map(
            (chord: IChordPropsModel, index: number) => (
              <ChordBlockComponent
                id={this.generateCanvasId(chord.id)}
                key={index}
                name={chord.name}
                startString={chord.startString}
                structure={chord.structure}
              />
            )
          )}
          <AddChordBlockComponent
            chordList={this.props.chordList}
            basicChords={this.props.basicChords}
            addChord={this.props.addChord}
          />
        </div>
      </div>
    );
  }

  private fillchordList = (chords: string[]) => {
    const parsedChords: IChordPropsModel[] = [];
    chords.map(chordName => {
      const tempChord = basicChords.find(el => el.name === chordName);
      if (tempChord) {
        parsedChords.push(tempChord);
      }
    });
    return parsedChords;
  };
}

const mapStateToProps = (store: any) => ({
  chordList: store.chordListReducer.chordList,
  basicChords: store.chordListReducer.basicChords,
  text: store.chordListReducer.text
});

const mapDispatchToProps = {
  addChord
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChordList as any);
