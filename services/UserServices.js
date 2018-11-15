import Api from './Api';
import API_CONSTANTS from '../constants/apiConstants';

let { endPoint } = API_CONSTANTS;
let { query } = API_CONSTANTS;

export default {
  fetchUser(user) {
    let userQuery = endPoint.user + "?" + query.email + `=${user.email}&${query.username}=${user.username}&${query.password}=${user.password}`;
    return Api().get(userQuery)
  },
  checkUser(email) {
    return Api().get(`${endPoint.check}?${query.email}=${email}`)   //check?email=' + email)
  },
  postUser(user) {
    return Api().post('add', user)
  }
}