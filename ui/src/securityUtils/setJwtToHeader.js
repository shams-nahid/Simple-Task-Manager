import axios from 'axios';

const setJwtToHeader = token => {
  if (token) {
    return axios.defaults.headers.common['Authorization'] = token;
  }
  delete axios.defaults.headers.common['Authorization'];
}

export default setJwtToHeader;
