<template>
    <div class="character text-center my-3">
        <img class='img-fluid' :src="image" :alt="`Immagine di: ${name}`"/>
        <h6>{{ name }}</h6>
        <p class="mb-0">{{ type }}</p>
        <!-- <p class="mb-0">{{ archetype }}</p> -->
    </div>
</template>

<script>
    export default {
        name: 'CharacterCard',
        props: {
            image: String,
            name: String,
            type: String,
            // archetype: String,
        }
    }
</script>


<style scoped lang="scss">
@use "../styles/partials/variables" as *;


.character{
    background-color: $primary-color;
    height: 350px;
}
h6{
    color: white;
}
p{
    color: $text-color;
}

</style>