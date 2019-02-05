export const generateCanvasId = (id: string) => {
  return `canvas-${id}-${new Date().getMilliseconds()}-${makeIdEnding()}`;
};

function makeIdEnding() {
  let text = "-";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return new Date().getTime() + text;
}
