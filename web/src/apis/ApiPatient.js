
import axios from 'axios';

const URL = "http://localhost:8888/patient";

function apiCreatePatient(data) {
  return axios.post(URL+'/create', data).then(response => response.data);
}

export { apiCreatePatient }