<template>
    <div>
        <h1>Search Results</h1>
        <p>{{$store.state.search_results}}</p>
        <search-pages />
    </div>
</template>

<script>
import SearchPages from '@/components/SearchPages.vue'

export default {
    components: {
        SearchPages
    }
}
</script>

<style scoped>

</style>