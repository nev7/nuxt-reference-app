import Api from './Api';

export default {
  fetchUser(user) {
    let userQuery = `user?email=${user.email}&username=${user.username}&password=${user.password}`;
    return Api().get(userQuery)
  },
  checkUser(email) {
    return Api().get('check?email=' + email)
  },
  postUser(user) {
    return Api().post('add', user)
  }
}