import axios from 'axios';

const API_KEY = "?api_key=41a5f8fcc01e22aff4692321f6671eac";
const http = axios.create( {
    baseURL: "https://api.themoviedb.org/3"
});

export default {
    getMovie(id) {
        return http.get(`/movie/${id}`+API_KEY);
    },
    getCast(id) {
        return http.get(`/movie/${id}/credits`+API_KEY);
    },
    getPerson(id) {
        return http.get(`/person/${id}`+API_KEY);
    },
    getFilmography(id) {
        return http.get(`/person/${id}/movie_credits`+API_KEY);
    },
    searchMovies(query) {
        return http.get(`/search/movie`+API_KEY+`&query=`+query);
    },
    changeSearchPage(query, page) {
        return http.get(`/search/movie`+API_KEY+`&query=`+query+`&page=`+page);
    }
}