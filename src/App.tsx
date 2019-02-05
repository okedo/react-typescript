import * as React from "react";
import { connect } from "react-redux";
import { style } from "typestyle";
import { getSong } from "./actions/load-song.action";
import { SongText } from "./components/song.component";
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

  public componentDidMount() {
    this.getSong();
  }

  public getSong() {
    this.props.onGetSong();
  }

  public render() {
    return (
      <div className={generalStyle}>
        <ChordList />
        <SongText text={this.props.text} title={this.props.title} />
      </div>
    );
  }
}
const generalStyle = style({ color: "red" });

const mapStateToProps = (store: any) => ({
  text: store.pageReducer.text,
  title: store.pageReducer.title,
  chords: store.pageReducer.chords
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    onGetSong: () => {
      dispatch(getSong());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App as any);
