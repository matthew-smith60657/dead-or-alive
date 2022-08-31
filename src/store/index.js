import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '',
    release_date: '',
    poster_path: '',
    cast: [],
    search_query: '',
    search: []
  },
  getters: {
  },
  mutations: {
    SET_MOVIE(state, data) {
      state.title = data.title;
      state.release_date = data.release_date;
      state.poster_path = data.poster_path;
    },
    SET_CAST(state, cast) {
      state.cast = cast;
    },
    CLEAR_MOVIE_CAST(state) {
      state.case = [];
      state.title = '';
      state.release_date = '';
      state.poster_path = '';
    },
    SET_SEARCH_QUERY(state, query) {
      state.search_query = query;
    },
    SET_SEARCH_RESULTS(state, results) {
      state.search = results;
    },
    CLEAR_SEARCH(state) {
      state.search_query = '';
      state.search = [];
    }
  },
  actions: {
  },
  modules: {
  }
})
