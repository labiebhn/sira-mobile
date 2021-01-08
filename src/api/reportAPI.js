import axios from "axios";
import { port } from './port';

export const getReportAPI = data => {
  return axios.get(`${port}/laporanKeuangan`);
}