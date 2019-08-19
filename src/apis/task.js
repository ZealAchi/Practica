import axiosService from 'commons/axiosService';
import { API_ENDPOINT } from 'Constants2';
const url = 'tasks';

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};
