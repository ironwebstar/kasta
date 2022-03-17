import axios, { AxiosRequestConfig, ResponseType } from 'axios';
import { baseURL } from './urls';

export default {
  init() {
    axios.defaults.baseURL = baseURL;
    axios.defaults.headers['Content-Type'] = 'application/json';
    axios.defaults.timeout = 5000;
  },

  setHeader(accessToken: string) {
    axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
  },

  get<REQ, RES>(url: string, params?: REQ, responseType?: ResponseType) {
    return axios
      .get<RES>(url, { params, responseType })
      .then((res) => res.data);
  },

  post<REQ, RES>(url: string, data?: REQ, config?: AxiosRequestConfig) {
    return axios.post<RES>(url, data, config).then((res) => res.data);
  },
};
