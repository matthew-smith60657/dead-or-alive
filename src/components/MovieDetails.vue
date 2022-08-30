<template>
    <div class="detail-container">
        <!-- https://image.tmdb.org/t/p/original/[poster_path] -->
        <img v-bind:src="'https://image.tmdb.org/t/p/original/' + this.$store.state.poster_path" />
        <h3>Release Date: {{this.$store.state.release_date}}</h3>
    </div>
</template>

<script>

</script>

<style scoped>
.detail-container {
    border: 2px solid black;
    border-radius: 10px;
    padding: 5px;
    margin: 5px 0;
    max-width: 600px;
}

img {
    max-height: 100px;
    width: auto;
}
</style>
