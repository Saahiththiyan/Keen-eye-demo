import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";

Vue.use(Vuex);

const url =
  "https://raw.githubusercontent.com/shandhiviyarajan/covid-19-sl-data/master/covid-news.json";

export default new Vuex.Store({
  state: {
    allNews: [],
  },
  mutations: {
    setAllNews(state, payload) {
      state.allNews = payload;
    },
  },
  actions: {
    async setAllNews(state) {
      const response = await axios.get(url);
      state.commit("setAllNews", response.data);
    },
  },
  modules: { auth },
  getters: {
    getAllNews(state) {
      return state.allNews;
    },
  },
});
