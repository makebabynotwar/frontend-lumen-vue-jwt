import axios from 'axios'
export default {
  namespaced: true,
  state: {
      token: null,
      user: null,
      role: null
  },
  getters: {
      authenticated(state){
          if(state.token != null && state.user != null){
              return true;
          } else {
              return false
          }
      },
      user(state){
          return state.user
      },
      role(state){
          return state.role
      }
  },
  mutations: {
      SET_TOKEN(state, token){
          state.token = token;
      },
      SET_USER(state, data){
          state.user = data;
      },
      SET_ROLE(state, role){
          state.role = role
      }
  },
  actions: {
      async login({dispatch}, credentials) {
        let response = await axios.post('auth/login', credentials);
        return dispatch('attempt', response.data.access_token);
      },
      async attempt({commit, state}, token){
          if(token) {
            //   console.log('set_token')
              commit('SET_TOKEN', token);
          }
          if(!state.token){
            //   console.log('no token')
              return
          }

        try {
            let response = await axios.get('auth/Me');
            commit('SET_USER', response.data);
            commit('SET_ROLE', response.data.role);
        } 
        catch(e){
            commit('SET_TOKEN', null);
            commit('SET_USER', null);
        }
      },
      logout({commit}){
        axios.post('auth/logout').then(()=>{
            commit('SET_TOKEN', null);
            commit('SET_USER', null);
        })
      }
  }
}
