<template>
    <div class="singleCreditContainer" v-on:click.prevent="loadMovie">
        <img class="poster" v-bind:src="'https://image.tmdb.org/t/p/original' + this.posterPath" v-if="isPosterPathLoaded" />
        <div class="content">
            <div class="header">
                <span class="title">{{credit.title}}</span>
                <span class="year">&nbsp;({{releaseYear}})</span>
                <span class="tagline">&nbsp;{{tagline}}</span>
            </div>
            <p class="overview">{{credit.overview}}</p>
        </div>
    </div>
</template>

<script>
    import tmdbService from '@/services/TmdbService.js';

    export default {
        data() {
            return {
                posterPath: '',
                tagline: '',
                popularity: '',
                isPosterPathLoaded: false
            }
        },
        props: {
            // already contains id, release_date and title
            credit: Object
        },
        computed: {
            releaseYear() {
                if(this.credit.release_date == '') {
                    return "unknown";
                }
                return new Date(this.credit.release_date).getFullYear();
            }
        },
        created() {
            this.getMovie(this.credit.id);
        },
        methods: {
            getMovie(id) {
                tmdbService.getMovie(id)
                    .then( response => {
                        this.posterPath = response.data.poster_path;
                        this.tagline = response.data.tagline;
                        this.popularity = response.data.popularity;
                        
                        if(this.posterPath != undefined) {
                            this.isPosterPathLoaded = true;
                        }
                    })
                    .catch( error => {
                        this.posterPath = null;
                        this.tagline = '';
                        this.popularity = 0;
                    })
            },
            loadMovie() {
                this.$router.push({name: "detail", params: {movieId: this.credit.id}});
            }
        }
    }
</script>

<style scoped>
.singleCreditContainer {
    display: flex;
    border: 1px grey solid;
    border-radius: 5px;
}
.singleCreditContainer:hover {
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
.year {
    font-size: 1.25vw;
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