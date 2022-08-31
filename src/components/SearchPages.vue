<template>
    <div>
        <h3>Search Pages</h3>
        <div class="pageContainer" v-if="isLoaded">
            <div class="linkContainer" v-for="index in $store.state.search.total_pages">
                <a class="pageLink" v-on:click.prevent="reloadPage">{{index}}</a>
                <span v-if="index<$store.state.search.total_pages">&nbsp;|&nbsp;</span>
            </div>
        </div>
    </div>
</template>

<script>
import TmdbService from '../services/TmdbService';

export default {
    methods: {
        reloadPage(event) {
            this.isLoaded = false;
            TmdbService.changeSearchPage(this.$store.state.search_query, event.target.innerText)
                .then(response => {
                    this.$store.commit('SET_SEARCH_RESULTS', response.data);
                    this.isLoaded = true;
                })
        }
    },
    data() {
        return {
            isLoaded: true
        };
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
.pageLink:hover {
    color: red;
}
</style>