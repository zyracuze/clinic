
import axios from 'axios';
import config from './config';

export const apiCreatePatient=(data)=>{
  return axios.post(config.CREATE_PATIENT_URL, data).then(response => response.data);
}

export const apiValidateSearch=(data)=>{
  return axios.post(config.SEARCH_PATIENT_URL,data).then(responseFromSearch => responseFromSearch.data);
}

export const apiSearchPatientById=(id)=>{
  return axios.get(config.SEARCH_PATIENT_URL+ "/" +id).then(responseFromSearch => responseFromSearch.data);
}

export const apiUpdatePatient=(data)=>{
  return axios.post(config.UPDATE_PATIENT_URL , data).then(response => response.data);
}

