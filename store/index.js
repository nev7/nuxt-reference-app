import Vuex from 'vuex';
import UsersService from "../services/UserServices";

const createStore = () => {
    return new Vuex.Store({
        state: {
            loggedIn: false,
            isLoading: false,
            user: {
                email: '',
                username: '',
                password: '',
            },
            links: [{
                //icon: 'widgets',
                title: 'Home',
                to: '/menu/home'
            },
            {
                //icon: 'book',
                title: 'Category 1',
                to: '/menu/cat'
            },
            ],
            sideNav: {
                clipped: false,
                drawer: true,
                miniVariant: false,
            },
            footer: {
                fixed: false
            }
        },
        mutations: {
            USER_LOGGED: (state, data) => {
                state.loggedIn = data;
            },
            CURRENT_USER: (state, data) => {
                state.user = data;
            },
            CLEAR_USER: (state) => {
                state.user.email = '';
                state.user.username = '';
                state.user.password = '';
            },
        },
        actions: {
            async checkIfExisist() {
                let currUser = this.state.user;
                try {
                    this.state.isLoading = true;
                    const response = await UsersService.checkUser(currUser.email);
                    this.state.isLoading = false;
                    return response;
                } catch (error) {
                    this.state.isLoading = false;
                    console.error(error);
                }
            },
            async getUser({ commit }) {
                let currUser = this.state.user;
                try {
                    this.state.isLoading = true;
                    const response = await UsersService.fetchUser(currUser);
                    if (response.data.length < 1) {
                        console.log('User does not exsist, please try again.');
                    } else {
                        commit('CURRENT_USER', currUser);
                    }
                    this.state.isLoading = false;
                    return response;
                } catch (error) {
                    this.state.isLoading = false;
                    console.error(error);
                }
            },
            async addUser({ commit }) {
                let currUser = this.state.user;
                try {
                    this.state.isLoading = true;
                    await UsersService.postUser(currUser);
                    commit('CURRENT_USER', currUser);
                    this.state.isLoading = false;
                } catch (error) {
                    this.state.isLoading = false;
                    console.error(error);
                }
            }
        }
    })
}

export default createStore;