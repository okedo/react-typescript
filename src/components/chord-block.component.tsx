import * as React from "react";
import { classes, style } from "typestyle";
import { IChordModel } from "./../models/chord-props.model";

export class ChordBlockComponent extends React.Component<IChordModel, {}> {
  public render() {
    const { name, structure, startString } = this.props;
    return (
      <div>
        <div>
          <div>{name}</div>
          <div className={chordNumberStyle}>{startString}</div>
        </div>
        <div>
          {structure.strings.map((GuitarString, key) => (
            <div className={stringRow} key={key}>
              {GuitarString.map((entrie, key2) => (
                <button
                  onClick={this.clickString(entrie)}
                  key={key2}
                  className={classes(
                    stringBase,
                    entrie && checkedString,
                    !entrie && freeString
                  )}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
  private clickString = (e: boolean) => {
    e = !e;
  };
}
const chordNumberStyle = style({
  color: "black",
  textAlign: "right",
  width: "120px"
});
const stringBase = style({
  display: "inline-block",
  width: "40px",
  margin: "0",
  height: "15px"
});
const checkedString = style({ zIndex: 2, backgroundColor: "red" });
const freeString = style({ backgroundColor: "black" });
const stringRow = style({
  backgroundColor: "black",
  margin: "0",
  width: "120px",
  height: "20px"
});
