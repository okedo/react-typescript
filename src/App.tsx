import * as React from "react";
import { connect } from "react-redux";
import { style } from "typestyle";
import { IBasePageProps } from "./models/base-page.props.model";
import { IBasePageState } from "./models/base-page.state.model";
import { Store } from "./models/store.model";

class App extends React.Component<IBasePageProps, IBasePageState> {
  constructor(props: IBasePageProps) {
    super(props);
    this.state = {
      baseText: ""
    };
  }

  public render() {
    const { text } = this.props;
    const { baseText } = this.state;
    return (
      <div className={generalStyle}>
        {text ? text : "no data"} {baseText ? baseText : "no data"}
      </div>
    );
  }
}
const generalStyle = style({ color: "red" });

const mapStateToProps = (store: Store) => {
  return {
    text: store.basePage ? store.basePage.text : ""
  };
};

export default connect(mapStateToProps)(App as any);
