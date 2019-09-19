import axios from 'axios';
import { GET_ERRORS, GET_PROJECT_TASK, DELETE_PROJECT_TASK, GET_BACKLOG } from './types';

const baseApi = '/api';
const backlogApi = baseApi + '/backlog';

export const addProjectTask = (backlog_id, project_task, history) => async dispatch => {
  try {
    await axios.post(`${backlogApi}/${backlog_id}`, project_task);
    history.push(`/projectBoard/${backlog_id}`);
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getBacklog = backlog_id => async dispatch => {
  try {
    const res = await axios.get(`${backlogApi}/${backlog_id}`);
    dispatch({
      type: GET_BACKLOG,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

