import * as React from "react";
import { connect } from "react-redux";
import { style } from "typestyle";
import { ChordBlockComponent } from "./components/chord-block.component";
import { IBasePageProps } from "./models/base-page.props.model";
import { IBasePageState } from "./models/base-page.state.model";
import { IChordModel } from "./models/chord-props.model";

class App extends React.Component<IBasePageProps, IBasePageState> {
  constructor(props: IBasePageProps) {
    super(props);
    this.state = {
      baseText: ""
    };
  }

  public render() {
    const { text, chords } = this.props;
    return (
      <div className={generalStyle}>
        {text ? text : "no data"}
        {chords.map((chord: IChordModel, index: number) => (
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
const generalStyle = style({ color: "red" });

const mapStateToProps = (store: any) => ({
  text: store.pageReducer.text,
  chords: store.pageReducer.chords
});

export default connect(mapStateToProps)(App as any);
