import { GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from '../actions/types';

const initialState = {
  projects: [],
  project: {}
};

export default function(state = initialState, action) {
  const {
    type,
    payload
  } = action;
  switch(type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload
      };
    case GET_PROJECT:
      return {
        ...state,
        project: payload
      };
    case DELETE_PROJECT:
        return {
          ...state,
          projects: state.projects.filter(project => project.projectIdentifier !== payload)
        };
    default:
      return state;
  }
}
