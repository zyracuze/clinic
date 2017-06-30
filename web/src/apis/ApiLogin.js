
import axios from 'axios';
import config from './config';

function validateLogin(data) {
  return axios.post(config.LOGIN_URL,data).then( response => response.data );
}

export { validateLogin }