
import axios from 'axios';
import config from './config';

export const apiCreateFee=(data)=>{
  return axios.post(config.CREATE_FEE_URL, data).then(response => response.data);
}


