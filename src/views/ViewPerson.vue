<template>
    <div>
        <h1>{{name}}&nbsp;({{birthyear}} - {{deathyear}})</h1>
        <div id="creditContainer">
            <movie-credit v-for="credit in credits" v-bind:key="credit.credit_id" v-bind:credit="credit" v-if="isFilmographyLoaded" />
        </div>
    </div>
</template>

<script>
    import tmdbService from '@/services/TmdbService';
    import MovieCredit from '@/components/MovieCredit.vue';

    export default {
        components: {
            MovieCredit
        },
        data() {
            return {
                name: '',
                birthday: '',
                deathday: '',
                credits: [],
                isFilmographyLoaded: false
            }
        },
        created() {
            tmdbService.getPerson(this.$route.params.personId)
                .then( response => {
                    this.name = response.data.name;
                    this.birthday = response.data.birthday;
                    this.deathday = response.data.deathday;
                })
                .catch( error => console.error(error));
            tmdbService.getFilmography(this.$route.params.personId)
                .then( response => {
                    this.credits = response.data.cast;
                    this.isFilmographyLoaded = true;
                })
        },
        computed: {
            birthyear() {
                if(this.birthday == null) { return null }
                return new Date(this.birthday).getFullYear();
            },
            deathyear() {
                if(this.deathday == null) { return "" }
                return new Date(this.deathday).getFullYear();
            },
            isBirthyearAvailable() {
                return !(this.birthday == null);
            },
            isDead() {
                return !(this.deathday == null);
            }
        },
    }
</script>

<style scoped>

</style>