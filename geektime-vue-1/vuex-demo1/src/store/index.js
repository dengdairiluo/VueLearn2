import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({commit}) {
      setTimeout(() => {
        commit('increment')
      }, 3000);
    }
  },
  modules: {
    doubleCount(state) {
      return state.count * 2;
    }
  }
});
