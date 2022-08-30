<template>
    <div id="member-detail-container" v-if="isBirthyearAvailable">
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
                //console.log(response.data);
                // console.log(response.data.name + ": (" + response.data.birthday + "-" + response.data.deathday + ")");
                this.birthday = response.data.birthday;
                this.deathday = response.data.deathday;
            })
            .catch( error => console.error(error));
    },
    computed: {
        birthyear() {
            if(this.birthday == null) { return null }
            // console.log("date: " + this.birthday + " || Full Year: " + new Date(this.birthday).getFullYear() + " || UTC Full Year: " + new Date(this.birthday).getFullYear());
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
    }
    
}
</script>

<style scoped>
#member-detail-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.name {
    text-decoration: underline;
}

.dead {
    color: red;
}

</style>