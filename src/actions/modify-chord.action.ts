export function modifyChord(key: number, key2: number) {
  return {
    type: "MODIFY_CHORD",
    payload: key,
    key2
  };
}
