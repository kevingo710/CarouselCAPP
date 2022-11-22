import axios from 'react-native-axios';
import {MMKV} from '../storage/mmkv';
import {baseURL} from '../utils/constants';

export const toolboxApi = axios.create({baseURL});

toolboxApi.interceptors.request.use(async config => {
  const token = await MMKV.getStringAsync('tokenApi');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});
