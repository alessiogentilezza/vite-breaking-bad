<template>
    <div class="character text-center">
        <img class='img-fluid' :src="image" :alt="`Immagine di: ${name}`"/>
        <h5>{{ name }}</h5>
        <h5>{{ species }}</h5>
        <h5>{{ archetype }}</h5>
    </div>
</template>

<script>
    export default {
        name: 'CharacterCard',
        props: {
            image: String,
            name: String,
            archetype: String,
        }
    }
</script>


<style>

</style>