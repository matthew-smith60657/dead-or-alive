<template>
    <div>
        <h1>DEAD or ALIVE?!</h1>
        <movie-id id="movie-id" v-bind:movieId="$route.params.movieId"/>
        <!-- {{$route.params.movieId == null}} -->
    </div>
</template>

<script>
import MovieId from '@/components/MovieId.vue';

export default {
    name: "homePage",
    components: {
        MovieId
    }
}
</script>

<style scoped>
#movie-id {
    display: inline-grid;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

</style>
<!-- newline required here?! -->
