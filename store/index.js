import Vuex from 'vuex';


const createStore = () => {
    return new Vuex.Store({
        state: {
            loggedIn: false,
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
        actions: {}
    })
}

export default createStore;