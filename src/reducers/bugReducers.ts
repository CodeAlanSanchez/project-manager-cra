import {
  CREATE_BUG,
  DELETE_BUG,
  FETCH_BUG,
  FETCH_BUGS,
  UPDATE_BUG,
} from 'types/actions';
/* eslint-disable import/no-anonymous-default-export */
export default (bugs = [], action: any) => {
  switch (action.type) {
    default:
      return bugs;
    case FETCH_BUG:
    case FETCH_BUGS:
      return action.payload;
    case CREATE_BUG:
      return [...bugs, action.payload];
    case UPDATE_BUG:
      return bugs.map((bug: any) =>
        bug.id === action.payload.id ? action.payload : bug
      );
    case DELETE_BUG:
      return bugs.filter((project: any) => project.id !== action.payload.id);
  }
};
