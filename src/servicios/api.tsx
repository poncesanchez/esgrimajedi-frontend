import axios from 'axios';
import ENV_CONFIG from './../config';

const Axios = axios.create({
   baseURL: ENV_CONFIG.baseURL,
   headers: {}
});

export default Axios;