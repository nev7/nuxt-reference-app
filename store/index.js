import Vuex from 'vuex';
import UsersService from "../services/UserServices";

const createStore = () => {
    return new Vuex.Store({
        state: {
            loggedIn: false,
            isLoading: false,
            accessToken: null,
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
                to: '/menu/cat' //dummy page
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
            USER_LOGGED: (state, bool) => {
                state.loggedIn = bool;
            },
            CURRENT_USER: (state, data) => {
                state.user.email = data.email;
                state.user.username = data.username;
                state.user. password = null;
            },
            CLEAR_USER: (state) => {
                state.user.email = '';
                state.user.username = '';
                state.user.password = '';
            },
            UPDATE_ACCESS_TOKEN: (state, token) => {
                state.accessToken = token;
            }
        },
        actions: {
            /**
             * Executes the checkUser service
             * @returns promise
             */
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
            /**
             * Executes the fetchUser service and if successful it updates the user obj in the store
             * @param {*} { commit }
             * @param {*} userData the user data from the DB if it found a match 
             * @returns promise
             */
            async getUser({ commit }, userData) {
                let currUser = {
                    current: this.state.user,
                    data: userData
                };
                try {
                    this.state.isLoading = true;
                    const response = await UsersService.fetchUser(currUser);
                    if (response.data.length < 1) {
                        console.error('Can not fetch user with these credentials');
                        this.state.isLoading = false;
                        return false;
                    }
                    commit('CURRENT_USER', currUser.current);
                    this.state.isLoading = false;
                    return response;
                } catch (error) {
                    this.state.isLoading = false;
                    console.error(error);
                }
            },
            /**
             * Executes the postUser service and updates the user obj in the store
             * @param {*} { commit }
             */
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