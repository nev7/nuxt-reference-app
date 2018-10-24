import Api from './Api';

export default {
  fetchUser () {
    return Api().get('user')
  },
  postUser (user) {
      return Api().post('add', user)
  }
}