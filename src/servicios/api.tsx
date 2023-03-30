import axios from 'axios';

const Axios = axios.create({
   baseURL: 'http://localhost:4000/v1',
   timeout: 1000,
   headers: {}
});

export default Axios;