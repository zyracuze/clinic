
import axios from 'axios';

const URL = "http://localhost:8888/login";

function validateLogin(data) {
  return axios.post(URL,data).then( response => response.data );
}

export { validateLogin }