<template>
    <div id="searchContainer">
            <div v-if="showQuery">
                <span>Movie Title:&nbsp;</span>
                <input id="searchBar" type="text" v-model="searchQuery" />
            </div>
            <div v-if="showYear">
                <span>Year:&nbsp;</span>
                <input id="searchYear" type="number" v-model.number="searchYear" />
            </div>
            <input id="searchButton" type="submit" v-on:click.prevent="searchMovie"/>
    </div>
</template>

<script>
import tmdbService from '@/services/TmdbService.js';

export default {
    data() {
        return {
            searchQuery: '',
            searchYear: 2022,
            showQuery: true,
            showYear: false
        };
    },
    methods: {
        searchMovie() {
            tmdbService.searchMovies(this.searchQuery)
                .then(response => {
                    this.$store.commit('SET_SEARCH_QUERY', this.searchQuery);
                    this.$store.commit('SET_SEARCH_RESULTS', response.data);
                    this.$router.push({name:'search'});
                    this.$store.commit('CLEAR_MOVIE_CAST');
                })
        }
    }
}
</script>

<style scoped>

</style>