<template>
    <div id="titleContainer">
        <search-container />
        <h1>{{$store.state.title}}</h1>
        <!-- <div id="idContainer">
            <input id="movieIdInput" type="number" v-model="movieId" v-on:change.prevent="newMovie"/>
        </div> -->
        <movie-details />
        <cast-details v-if="!isCastLoading" />
    </div>
</template>

<script>
import tmdbService from '@/services/TmdbService.js';
import MovieDetails from './MovieDetails.vue';
import CastDetails from './CastDetails.vue';
import SearchContainer from './SearchContainer.vue';

export default {
    name: 'movie-id-title',
    components: {
        MovieDetails,
        CastDetails,
        SearchContainer
    },
    data() {
        return {
            isMovieLoading: true,
            isCastLoading: true
        };
    },
    props: {
        movieId: Number
    },
    created() {
        if(this.movieId == null) {
            this.getMovie(550);
        } else {
            this.getMovie(parseInt(this.movieId));
        }
    },
    methods: {
        newMovie(event) {
            this.getMovie(event.target.value);
        },
        getMovie(id) {
            tmdbService.getMovie(id)
                .then(response => {
                    this.$store.commit('SET_MOVIE', response.data);
                    this.isMovieLoading = false;
                })
                .catch( error => {
                    this.$store.commit('SET_MOVIE', {title: "** not a movie **", releaseDate: "n/a"});
                    console.error(error);
                });
            this.isMovieLoading = false;

            tmdbService.getCast(id)
                .then(response => {
                    this.$store.commit('SET_CAST', response.data.cast)
                    this.isCastLoading = false;
                })
                .catch (error => {
                    this.$store.commit('SET_CAST', []);
                    console.error(error);
                });
            this.isCastLoading = false;
        }
    }
}
</script>

<style scoped>
#titleContainer {
    justify-items: center;
    max-width: 400px;
}
#movieIdInput {
    display: flex;
    max-width: 200px;
    justify-content: center;
    align-items: center;
}
</style>