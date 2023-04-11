import getEnv from 'helpers/getEnv';

const CONFIG = {
  baseURL:  getEnv('REACT_APP_API_URL') || '',
  INSTAGRAM_TOKEN: getEnv('REACT_APP_INSTAGRAM_TOKEN') || '',
  INSTAGRAM_USER: getEnv('REACT_APP_INSTAGRAM_USER') || ''
};


export default CONFIG;
