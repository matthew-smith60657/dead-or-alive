<template>
    <div id="cast-detail-container">
        <cast-member v-bind:member="member" v-for="member in $store.state.cast" v-bind:key="member.id" />
        <!-- {{this.$store.state.cast}} -->
    </div>
</template>

<script>
    import CastMember from './CastMember.vue';

    export default {
        name: "cast-details",
        components: {
            CastMember
        }
    }
</script>

<style scoped>
#cast-detail-container {
    border: 2px solid black;
    border-radius: 10px;
    max-width: 600px;
}
</style>