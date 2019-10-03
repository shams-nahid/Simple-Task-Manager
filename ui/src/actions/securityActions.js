import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import jwtDecode from 'jwt-decode';
import setJwtToHeader from '../securityUtils/setJwtToHeader';

const baseApi = '/api/users';

export const createNewUser = (newUser, history) => async dispatch => {
  try {
    await axios.post(`${baseApi}/register`, newUser);
    history.push("/login");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const login = LoginRequest => async dispatch => {
  try {
    const res = await axios.post(`${baseApi}/login`, LoginRequest);
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    setJwtToHeader(token);
    const decoded = jwtDecode(token);
    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setJwtToHeader(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};

