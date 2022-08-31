<template>
    <div>
        <h1>Search Results for "{{$store.state.search_query}}"</h1>
        <div class="resultContainer">
            <search-return v-for="movie in $store.state.search.results" v-bind:key="movie.id" v-bind:movie="movie" />
        </div>
        <search-pages />
    </div>
</template>

<script>
import SearchPages from '@/components/SearchPages.vue'
import SearchReturn from '@/components/SearchReturn.vue'

export default {
    components: {
        SearchPages,
        SearchReturn
    }
}
</script>

<style scoped>
.resultContainer {
    border: 1px black solid;
}
</style>