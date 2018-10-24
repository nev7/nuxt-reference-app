//connector between the client and the server

import axios from 'axios';

export default() => {
  return axios.create({
    baseURL: "http://localhost:3000"
  })
};