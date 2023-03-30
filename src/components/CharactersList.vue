<template>
    <div class="container px-5">
        <div class="row">
            <div class="col-2" v-for="(character, index) in store.charactersList" :key="index">

                <!-- PASSAGGIO PROPS A CARD -->

                <CharacterCard :image="character.card_images[0].image_url" :name="character.name"
                    :archetype="character.archetype" />
            </div>
        </div>
    </div>
</template>


<script>

import { store } from '../store.js';
import CharacterCard from './CharacterCard.vue';

export default {
    name: 'CharactersList',
    data() {
        return {
            store
        }
    },
    components: {
        CharacterCard,
    }
}
</script>


<style scoped lang="scss">
.row {
    background-color: white;
}
</style>