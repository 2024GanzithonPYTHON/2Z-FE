
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://49.50.163.226:8080'
});

export default instance;
