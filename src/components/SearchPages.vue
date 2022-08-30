<template>
    <div>
        <h1>Search Pages</h1>
        <div class="pageContainer">
            <div class="linkContainer" v-for="index in $store.state.search_results.total_pages">
                <a class="pageLink" v-on:click.prevent="reloadPage">{{index}}</a>
                <span v-if="index<$store.state.search_results.total_pages">&nbsp;|&nbsp;</span>
            </div>
        </div>
        <!-- <a v-for="index in $store.state.search_results.total_pages" v-on:click.prevent="reloadPage">{{index}}<span>|</span></a> -->
    </div>
</template>

<script>
import TmdbService from '../services/TmdbService';

export default {
    methods: {
        reloadPage(event) {
            TmdbService.changeSearchPage(this.$store.state.search_query, event.target.innerText)
                .then(response => {
                    this.$store.commit('SET_SEARCH_RESULTS', response.data);
                })
        }
    }
}
</script>

<style scoped>
.pageContainer {
    display: flex;
    justify-content: center;
}
.pageLink {
    text-decoration: underline;
}
</style>