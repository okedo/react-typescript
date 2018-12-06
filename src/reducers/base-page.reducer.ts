import { IBasePageProps } from "./../models/base-page.props.model";

const initialState: IBasePageProps = {
  text: "some text",
  chordLists: []
};

export function pageReducer(state = initialState) {
  return state;
}
