import { ADDITION, SUBTRACTION } from './actionTypes';

const initialState = {
  counter: 0,
  name: 'Hiep',
};
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITION:
      return { ...state, counter: state.counter + Math.random(100) };
    case SUBTRACTION:
      return { ...state, counter: state.counter - Math.random(100) };
    default:
      return state;
  }
};
