import * as React from "react";
import { connect } from "react-redux";
import { style } from "typestyle";
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
      </div>
    );
  }
}

const mapStateToProps = (store: any) => ({
  chordList: store.chordListReducer.chordList,
  text: store.chordListReducer.text
});

export default connect(mapStateToProps)(ChordList as any);
