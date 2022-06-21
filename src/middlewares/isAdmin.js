import store from '@/store'

export default (to, from, next) => {
    if(store.getters['auth/authenticated'] && store.getters['auth/role'] == 'admin' 
        || store.getters['auth/authenticated'] && store.getters['auth/role'] == 'manager'){
        return next();
    }
    next({name:'landing-page'})
}