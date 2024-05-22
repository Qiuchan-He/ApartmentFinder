import { COLLECT, UN_COLLECT } from "../constants";

export function setCollect(collect) {
  return {
    type: COLLECT,
    collect,
  };
}

export function removeCollect(id) {
  return {
    type: UN_COLLECT,
    id,
  };
}
