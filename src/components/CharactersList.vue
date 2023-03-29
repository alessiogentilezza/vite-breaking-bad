<template>
    <div class="container">
        <div class="row">
            <div class="col-2" v-for="(character, index) in store.charactersList" :key="index">
                <CharacterCard  
                    :image="character.card_images"
                    :name="character.name"
                    :archetype="character.archetype"
                />
            </div>
        </div>
    </div>
</template>


<script>

    import {store} from '../store.js';
    import CharacterCard from './CharacterCard.vue';

    export default {
        name: 'CharactersList',
        data() {
            return {
                store
            }
        },
        components: {
            CharacterCard
        }
    }
</script>


<style>

</style>