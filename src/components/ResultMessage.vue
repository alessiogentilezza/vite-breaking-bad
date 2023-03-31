<template>
    <h4 v-if="store.charactersList.length > 0" class="text-center">{{ message }}</h4>
    <h4 v-else>Nessun risultato per questa categoria</h4>
</template>

<script>

import {store} from '../store.js';

export default {
    name: 'ResultMessage',
    data() {
        return {
            store
        }
    },
    computed: {
        message() {
            return `Ci sono ${store.charactersList.length} risultati`;
        }
    }

}

</script>


<style>


</style>