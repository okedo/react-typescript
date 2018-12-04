import * as React from "react";
import { IChordModel } from "./../models/chord-props.model";

export class ChordBlockComponent extends React.Component<
  IChordModel,
  { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D }
> {
  public componentDidMount() {
    this.updateCanvas();
  }

  public componentDidUpdate() {
    this.drawChord();
  }

  public render() {
    const { name } = this.props;
    return (
      <div>
        <div>
          <div>{name}</div>
          <canvas id={this.props.id} width={390} height={140} />
        </div>
        <div />
      </div>
    );
  }

  private updateCanvas() {
    const canvasRef: any = document.getElementById(this.props.id);
    const renderingContext = canvasRef ? canvasRef.getContext("2d") : null;
    this.setState({ canvas: canvasRef, ctx: renderingContext });
    if (renderingContext) {
      renderingContext.fillStyle = "#E5CE8C";
      renderingContext.fillRect(0, 0, 390, 140);
    }
  }

  private drawBasis(): void {
    for (let i = 1; i <= 12; i++) {
      this.drawALine("#FFFFFF", i * 30, 0, i * 30, 140);
    }
    for (let i = 0; i <= 6; i++) {
      this.drawALine("#6D5454", 0, i * 20, 390, i * 20);
    }
  }

  private drawChord() {
    const stringHeight = 20;
    let currentStringHigth = 20;
    this.drawBasis();
    for (const stringG in this.props.structure.strings) {
      if (this.props.structure.strings.hasOwnProperty(stringG)) {
        this.props.structure.strings[stringG].forEach((element: number) => {
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
  }

  private calculateElementHorizontalPosition(element: number): number {
    const rowWidth = 30;
    return 390 - element * rowWidth + rowWidth * 1.5;
  }

  private drawCircle(
    size: number,
    color: string,
    fill: string,
    horizontal: number,
    vertical: number
  ): void {
    const ctx = this.state.ctx;
    ctx.strokeStyle = color;
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(horizontal, vertical, size, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }

  private drawALine(
    color: string,
    xStart: number,
    yStart: number,
    xEnd: number,
    yEnd: number
  ): void {
    const ctx = this.state.ctx;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
  }
}
