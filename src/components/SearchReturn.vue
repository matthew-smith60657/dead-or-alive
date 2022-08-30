<template>
    <div class="movieContainer" v-on:click.prevent="loadMovie">
        <!-- {{movie}} -->
        <img class="poster" v-bind:src="'https://image.tmdb.org/t/p/original/' + movie.poster_path" v-if="hasPoster" />
        <h2>{{movie.title}}</h2>
        <p>{{movie.release_date}}</p>
        <p>{{movie.overview}}</p>
    </div>
</template>

<script>

export default {
    props: {
        movie: Object
    },
    methods: {
        loadMovie(event) {
            this.$router.push({name: "detail", params: {movieId: this.movie.id}});
        }
    },
    computed: {
        hasPoster() {
            return this.movie.poster_path != null;
        }
    }
}
</script>

<style scoped>
.movieContainer {
    border-top: 1px grey solid;
    border-bottom: 1px grey solid;
    /* background-image: url("'https://image.tmdb.org/t/p/original/' + this.movie.backdrop_path"); */
}
.poster {
    max-height: 200px;
    margin-top: 1vh;
}
</style>