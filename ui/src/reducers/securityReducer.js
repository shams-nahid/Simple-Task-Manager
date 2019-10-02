import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
  user: {},
  validToken: false
};

export default function(state = initialState, { type, payload }) {
  switch(type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        validToken: !!payload,
        user: payload
      };
    default:
     return state;
  }
}