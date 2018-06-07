import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const state = {
  count: 0
};

export default new Vuex.Store({
  state,
  mutations,
  strict: debug
});
