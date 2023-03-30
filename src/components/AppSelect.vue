<template>
        <!-- CICLO CATEGORIE -->

        <div class="container p-5">
        <div class="col-3">
            <select @change="$emit('doSelect')" class="form-select" v-model="store.select">
                <option value="">All Cards</option>
                <option v-for="(type, index) in storeType.charactersType" :key="index" :value="type.archetype_name">
                    {{ type.archetype_name }}
                </option>
            </select>
        </div>
    </div>

    <!-- ELENCO RISULTATI -->

    <div class="container px-5">
        <div class="row p-4 bg-dark bg-gradient text-white">
            <div class="col-auto">
                <ResultMessage></ResultMessage>
            </div>
        </div>
    </div>
</template>


<script>
import { store } from '../store.js';
import { storeType } from '../storeType.js';
import ResultMessage from './ResultMessage.vue';

export default {
    name: 'AppSelect',

    components: {
        ResultMessage,
    },

    data() {
        return {
            store,
            storeType
        }
    }
}
</script>


<style></style>