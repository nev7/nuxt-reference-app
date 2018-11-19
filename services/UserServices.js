import Api from './Api';
import API_CONSTANTS from '../constants/apiConstants';

let { endPoint } = API_CONSTANTS;
let { query } = API_CONSTANTS;

export default {
  fetchUser(user) {
    return Api().post(endPoint.user, user);
  },
  checkUser(email) {
    return Api().get(`${endPoint.check}?${query.email}=${email}`);
  },
  postUser(user) {
    return Api().post(endPoint.add, user);
  }
};