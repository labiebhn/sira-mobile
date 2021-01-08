import axios from "axios";
import { port } from './port';

export const getCodeAccountAPI = data => {
  return axios.get(`${port}/getAccount`);
}

export const addTransactionAPI = data => {
  return axios.post(`${port}/addTransaksi`, data);
}

export const getTransactionAPI = data => {
  return axios.get(`${port}/getTransaksi`);
}