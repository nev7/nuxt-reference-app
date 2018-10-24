import Vuex from 'vuex';
import UsersService from "../services/UserServices";

const createStore = () => {
    return new Vuex.Store({
        state: {
            loggedIn: false,
            user: {
                email: '',
                password: '',
                terms: false
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
            CURRENT_USER: (state, data) => {
                state.user.email = data.email;
                state.user.password = data.password;
            }
        },
        actions: {
            async getUser({ commit }) {
                try {
                    const response = await UsersService.fetchUser();
                    commit('CURRENT_USER', response.data);
                    if (response.data.length < 1) {
                        console.log('User does not exsist, please try again.');
                    }
                } catch (error) {
                    console.error(error);
                }
            },
            async addUser() {
                let newUser = this.user;

                try {
                    await UsersService.postUser(newUser);
                } catch (error) {
                    console.error(error);
                }
            }
        }
    })
}

export default createStore;