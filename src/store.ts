import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    UserPoolId: 'eu-central-1_GDQSCPq4F',
    ClientId: '62maqn2bssdgj860946runefso',
  },
  mutations: {
    setUser(state, user) {
      console.log(state, user);
      state.user = user;
    },
  },
  plugins: [createPersistedState()],
});
