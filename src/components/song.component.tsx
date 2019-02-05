import * as React from "react";
import { ISongProps } from "../models/song.props.model";

export class SongText extends React.Component<ISongProps> {
  constructor(props: ISongProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.text}</div>
      </div>
    );
  }
}
