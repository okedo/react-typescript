import * as React from "react";
import { connect } from "react-redux";
import { style } from "typestyle";
import ChordList from "./containers/chord-list.container";
import { IBasePageProps } from "./models/base-page.props.model";
import { IBasePageState } from "./models/base-page.state.model";

class App extends React.Component<IBasePageProps, IBasePageState> {
  constructor(props: IBasePageProps) {
    super(props);
    this.state = {
      baseText: ""
    };
  }

  public render() {
    return (
      <div className={generalStyle}>
        <ChordList />
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
