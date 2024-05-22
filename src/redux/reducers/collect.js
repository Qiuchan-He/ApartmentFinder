import { COLLECT, UN_COLLECT } from "../constants";
import findIndex from "lodash/findIndex";

const defaultState = [];

export default function collect(state = defaultState, action) {
  switch (action.type) {
    case COLLECT:
      return [...state, action.collect];
    case UN_COLLECT:
      const currentIndex = findIndex(state, (item) => item === action.id);
      return [
        ...state.slice(0, currentIndex),
        ...state.slice(currentIndex + 1),
      ];
    default:
      return state;
  }
}
