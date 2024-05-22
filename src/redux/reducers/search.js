import { UPDATE_SEARCH } from "../constants";

const defaultState = {
  search: "",
};

const search = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {
        search: action.search,
      };
    default:
      return state;
  }
};

export default search;
