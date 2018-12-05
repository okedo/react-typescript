import * as React from "react";
import { style } from "typestyle";
import { IChordPropsModel } from "../models/chord-block.props.model";
import { IChordStateModel } from "../models/chord-block.state.model";

export class ChordBlockComponent extends React.Component<
  IChordPropsModel,
  IChordStateModel
> {
  private accordDescription = style({
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  });
  private descriptionElement = style({
    padding: "0 13px"
  });
  private mainContainer = style({
    width: "auto",
    display: "inline-block",
    margin: "20px",
    color: "black"
  });

  public constructor(props: IChordPropsModel) {
    super(props);
    this.state = {
      canvasWidth: 390,
      canvasHeight: 140,
      maxRow: 12,
      minRow: 0
    };
  }

  public componentDidMount() {
    this.findBorders();
    this.initCanvas();
    setTimeout(() => {
      this.calculateCanvasSize();
      this.drawChord();
    });
  }

  public render() {
    const { name } = this.props;
    return (
      <div>
        <div className={this.mainContainer}>
          <div className={this.accordDescription}>
            <div className={this.descriptionElement}>{name}</div>
            <div className={this.descriptionElement}>
              {this.state.minRow ? this.state.minRow : 1}
            </div>
          </div>
          <canvas
            id={this.props.id}
            width={this.state.canvasWidth}
            height={this.state.canvasHeight}
          />
        </div>
      </div>
    );
  }

  private initCanvas() {
    const canvasRef: any = document.getElementById(this.props.id);
    const renderingContext = canvasRef ? canvasRef.getContext("2d") : null;
    this.setState({ canvas: canvasRef, ctx: renderingContext });
  }

  private drawBasis(): void {
    this.drawRectangle(
      "#E5CE8C",
      0,
      0,
      this.state.canvasHeight,
      this.state.canvasWidth
    );
    for (let i = 1; i <= 12; i++) {
      this.drawALine("#FFFFFF", i * 30, 0, i * 30, this.state.canvasHeight);
    }
    for (let i = 0; i <= 6; i++) {
      this.drawALine("#6D5454", 0, i * 20, this.state.canvasWidth, i * 20);
    }
  }

  private drawRectangle(
    color: string,
    positionY: number,
    positionX: number,
    width: number,
    height: number
  ) {
    const ctx = this.state.ctx;
    if (ctx) {
      ctx.fillStyle = color;
      ctx.fillRect(positionX, positionY, height, width);
    }
  }

  private drawChord(): void {
    const stringHeight: number = 20;
    let currentStringHigth: number = 20;
    const pressedStringRows: number[] = [];
    this.drawBasis();
    for (const stringG in this.props.structure.strings) {
      if (this.props.structure.strings.hasOwnProperty(stringG)) {
        this.props.structure.strings[stringG].forEach((element: number) => {
          pressedStringRows.push(element);
          this.drawCircle(
            5,
            "black",
            "black",
            this.calculateElementHorizontalPosition(element),
            currentStringHigth
          );
        });
        currentStringHigth += stringHeight;
      }
    }
    const minRow: number = Math.min.apply(null, pressedStringRows);
    if (pressedStringRows.filter(el => el === minRow).length === 6) {
      this.drawBare(minRow);
    }
  }

  private findBorders(): void {
    let max = 1;
    let min = 12;
    for (const stringG in this.props.structure.strings) {
      if (this.props.structure.strings.hasOwnProperty(stringG)) {
        max =
          Math.max.apply(null, this.props.structure.strings[stringG]) > max
            ? Math.max.apply(null, this.props.structure.strings[stringG])
            : max;
        min =
          Math.min.apply(null, this.props.structure.strings[stringG]) < min
            ? Math.min.apply(null, this.props.structure.strings[stringG])
            : min;
      }
    }
    this.setState({ maxRow: max, minRow: min });
  }

  private calculateElementHorizontalPosition(element: number): number {
    const rowWidth = 30;
    return this.state.canvasWidth - element * rowWidth + rowWidth * 0.5;
  }

  private calculateCanvasSize(): void {
    const tempWidth = (this.state.maxRow - this.state.minRow + 1) * 30;
    this.setState({ canvasWidth: tempWidth });
  }

  private drawCircle(
    size: number,
    color: string,
    fill: string,
    horizontal: number,
    vertical: number
  ): void {
    const ctx = this.state.ctx;
    if (ctx) {
      ctx.strokeStyle = color;
      ctx.fillStyle = fill;
      ctx.beginPath();
      ctx.arc(horizontal, vertical, size, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
    }
  }

  private drawALine(
    color: string,
    xStart: number,
    yStart: number,
    xEnd: number,
    yEnd: number,
    lineWidth?: number
  ): void {
    const ctx = this.state.ctx;
    if (ctx) {
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(xStart, yStart);
      ctx.lineTo(xEnd, yEnd);
      ctx.lineWidth = lineWidth ? lineWidth : 1;
      ctx.stroke();
    }
  }

  private drawBare(row: number) {
    this.drawALine(
      "black",
      this.calculateElementHorizontalPosition(row),
      5,
      this.calculateElementHorizontalPosition(row),
      this.state.canvasHeight - 5,
      15
    );
  }
}
