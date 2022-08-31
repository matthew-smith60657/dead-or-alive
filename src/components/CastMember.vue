<template>
    <div id="member-detail-container" v-if="isBirthyearAvailable" v-on:click.prevent="viewPerson">
        <p class="name" v-bind:class="{dead: isDead}">{{member.name}} ({{birthyear}}-{{deathyear}})</p>
        <p class="character">{{member.character}}</p>
    </div>
</template>

<script>
import tmdbService from '@/services/TmdbService.js';

export default {
    name: 'cast-member',
    data() {
        return {
            birthday: "",
            deathday: ""  
        }
    },
    props: {
        member: Object
    },
    created() {
        tmdbService.getPerson(this.member.id)
            .then( response => {
                this.birthday = response.data.birthday;
                this.deathday = response.data.deathday;
            })
            .catch( error => console.error(error));
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
    methods: {
        viewPerson() {
            this.$router.push({name: "person", params: {personId: this.member.id}});
            this.$store.commit('CLEAR_MOVIE_CAST');
        }
    }
    
}
</script>

<style scoped>
#member-detail-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#member-detail-container:hover {
    background-color: rgb(240,240,240);
}
.name {
    text-decoration: underline;
    margin-right: 1vw;
}

.dead {
    color: red;
}

</style>