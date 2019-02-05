import * as React from "react";
import { connect } from "react-redux";
import { style } from "typestyle";
import { addChord } from "./../actions/add-chord.action";
import { getChord } from "./../actions/load-chords.action";
import { AddChordBlockComponent } from "./../components/add-chord-block.component";
import { ChordBlockComponent } from "./../components/chord-block.component";
import { IChordPropsModel } from "./../models/chord-block.props.model";
import { IChordListProps } from "./../models/chord-list.props.model";

class ChordList extends React.Component<IChordListProps> {
  private generalStyle = style({ color: "red" });

  public componentDidMount() {
    this.getChordList(this.props.chordList);
  }

  public render() {
    const { text, chordList } = this.props;
    return (
      <div>
        <div className={this.generalStyle}>{text}</div>
        <div>
          {chordList.map((chord: IChordPropsModel, index: number) => (
            <ChordBlockComponent
              id={chord.id}
              templateId={chord.templateId}
              key={index}
              name={chord.name}
              startString={chord.startString}
              structure={chord.structure}
            />
          ))}
          <AddChordBlockComponent
            chordList={this.props.chordList}
            basicChords={this.props.basicChords}
            addChord={this.props.addChord}
          />
        </div>
      </div>
    );
  }

  public getChordList(chordlist: IChordPropsModel[]) {
    this.props.onGetChord(chordlist);
  }
}

const mapStateToProps = (store: any) => ({
  chordList: store.chordListReducer.chordList,
  basicChords: store.chordListReducer.basicChords,
  text: store.chordListReducer.text
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    onGetChord: (chordlist: string[]) => {
      dispatch(getChord(chordlist));
    },
    addChord: (
      chordList: IChordPropsModel[],
      selectedChord: IChordPropsModel
    ) => {
      dispatch(addChord(chordList, selectedChord));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChordList as any);
