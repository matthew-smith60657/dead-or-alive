<template>
    <div class="movieContainer" v-on:click.prevent="loadMovie">
        <img class="poster" v-bind:src="'https://image.tmdb.org/t/p/original/' + movie.poster_path" v-if="hasPoster" />
        <div class="content">
            <div class="header">
                <span class="title">{{movie.title}}</span>
                <span class="releaseDate">&nbsp;({{releaseYear}})</span>
                <!-- no tagline in movie Object? -->
            </div>
            <p class="overview">{{movie.overview}}</p>
        </div>
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
            this.$store.commit('CLEAR_SEARCH');
        }
    },
    computed: {
        hasPoster() {
            return this.movie.poster_path != null;
        },
        releaseYear() {
            return new Date(this.movie.release_date).getFullYear(); 
        }
    }
}
</script>

<style scoped>
.movieContainer {
    display: flex;
    border: 1px grey solid;
    border-radius: 5px;
}
.movieContainer:hover {
    background-color: rgb(240,240,240);
}
.poster {
    max-width: 5vw;
}
.content{ 
    padding-left: 0.5vw;
}
.title {
    font-size: 2vw;
}
.releaseDate {
    font-size: 1.5vw;
}
.header {
    display: flex;
    align-items: center;
}
.overview {
    font-size: 1vw;
    text-align: left;
}
.tagline {
    font-style: italic;
    font-size: 1.25vw;
}
</style>