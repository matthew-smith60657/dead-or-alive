<template>
    <div>
        <h1>DEAD or ALIVE?!</h1>
        <!-- <div class="fireworks-container" style="background-size: cover; background-position: 50% 50%; background-repeat: no-repeat;"><canvas width="1365" height="975"></canvas></div> -->
        <movie-id id="movie-id" />
    </div>
</template>

<script>
import MovieId from '@/components/MovieId.vue';
// import { Fireworks } from 'fireworks-js'

// const container = document.querySelector('.container');
// const fireworks = new Fireworks(container, { /* options */ });
// fireworks.start();

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
