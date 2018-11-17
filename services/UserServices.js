import Api from './Api';
import API_CONSTANTS from '../constants/apiConstants';

let { endPoint } = API_CONSTANTS;
let { query } = API_CONSTANTS;

export default {
  fetchUser(user) {
    //let userQuery = endPoint.user + "?" + query.email + `=${user.curr.email}&${query.username}=${user.curr.username}&${query.password}=${user.curr.password}&${query.hash}=${user.data.password}`;
    return Api().post(endPoint.user, user)
  },
  checkUser(email) {
    return Api().get(`${endPoint.check}?${query.email}=${email}`)   //check?email=' + email)
  },
  postUser(user) {
    return Api().post(endPoint.add, user)
  }
}