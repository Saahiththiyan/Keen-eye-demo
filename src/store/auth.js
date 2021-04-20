import axios from "axios";

const headers = {
  VUE_APP_X_KEY: process.env.VUE_APP_X_KEY,
  VUE_APP_X_SECRET: process.env.VUE_APP_X_SECRET,
};
export default {
  namespaced: true,
  state: {
    token: "tokenstring",
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    removeToken(state) {
      state.token = null;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        let response = await axios.post(
          "http://pb-backend-lb-30e3b7a2fe04ab9c.elb.eu-west-3.amazonaws.com/v1/authenticate/login",
          credentials,
          headers
        );
        commit("setToken", response.data.token); // i am assuming that the login request sends back a token in response. I am storing it in the vuex store
      } catch (error) {
        console.log("Login Failed");
      }
    },
    logout({ commit }) {
      commit("removeToken");
    },
  },
};
