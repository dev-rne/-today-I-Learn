import Vue from 'vue';
import Vuex from 'vuex';
import storage from './modules/storage';
import * as getters from './modules/getters.js';
import * as mutations from './modules/mutations.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userName: storage.fetchName(),
  },
  getters: getters,
  mutations: mutations,
});
