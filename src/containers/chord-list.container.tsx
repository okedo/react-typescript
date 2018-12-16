import * as React from "react";
import { connect } from "react-redux";
import { style } from "typestyle";
import { addChord } from './../actions/add-chord.action';
import { AddChordBlockComponent } from "./../components/add-chord-block.component";
import { ChordBlockComponent } from "./../components/chord-block.component";
import { IChordPropsModel } from "./../models/chord-block.props.model";
import { IChordListProps } from "./../models/chord-list.props.model";

class ChordList extends React.Component<IChordListProps> {
  private generalStyle = style({ color: "red" });
  public render() {
    const { text, chordList } = this.props;
    return (
      <div>
        <div className={this.generalStyle}>{text}</div>
        {chordList.map((chord: IChordPropsModel, index: number) => (
          <ChordBlockComponent
            id={chord.id}
            key={index}
            name={chord.name}
            startString={chord.startString}
            structure={chord.structure}
          />
        ))}
        <AddChordBlockComponent
          chordList={this.props.chordList}
          basicChords={this.props.basicChords}
          addChord={this.props.addChord} />
      </div>
    );
  }
}

const mapStateToProps = (store: any) => ({
  chordList: store.chordListReducer.chordList,
  basicChords: store.chordListReducer.basicChords,
  text: store.chordListReducer.text
});

const mapDispatchToProps = {
  addChord
};

export default connect(mapStateToProps, mapDispatchToProps)(ChordList as any);
