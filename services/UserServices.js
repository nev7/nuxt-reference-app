import Api from './Api';

export default {
  fetchUser (user) {
    return Api().get('user', user)
  },
  checkUser (user) {
    return Api().get('check', user)
  },
  postUser (user) {
      return Api().post('add', user)
  }
}