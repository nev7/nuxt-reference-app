import Api from './Api';

export default {
  fetchUser (user) {
    return Api().post('user', user)
  },
  postUser (user) {
      return Api().post('add', user)
  },
  checkUser (user) {
    return Api().post('check', user)
  }
}