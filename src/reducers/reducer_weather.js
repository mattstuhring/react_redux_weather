import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // concat creates an entirely new array, we do not want to manipulte state with the push method
      return state.concat([action.payload.data]);
      // return [ action.payload.data, ...state ]; -> ES6 syntax, same as above
  }

  return state;
}
