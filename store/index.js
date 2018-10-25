import Vuex from 'vuex';
import UsersService from "../services/UserServices";

const createStore = () => {
    return new Vuex.Store({
        state: {
            loggedIn: false,
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
        },
        actions: {
            async getUser() {
                let currUser = this.state.user;
                try {
                    const response = await UsersService.fetchUser(currUser);
                    if (response.data.length < 1) {
                        console.log('User does not exsist, please try again.');
                    }
                    return response;
                } catch (error) {
                    console.error(error);
                }
            },
            async addUser() {
                let currUser = this.state.user;
                try {
                    await UsersService.postUser(currUser);
                } catch (error) {
                    console.error(error);
                }
            }
        }
    })
}

export default createStore;