export default function({isServer, store, req}){
    //console.log('server is: ', isServer);
    if (isServer && !req) {
        return;
    }
    //const userLogged = isServer ? getUserCookie : getUserFromLocalStorage;
    //store.commit('USER_LOGGED', true);
}