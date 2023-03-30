<template>
    <div class="container p-5">
        <div class="col-3">

            <select @change="$emit('doSelect')" class="form-select" v-model="store.select">
                <option value="">All Cards</option>
                <option value="Adamancipator">Adamancipator</option>
                <option value="Archfiend">Archfiend</option>
                <option value="Batteryman">Batteryman</option>
                <option value="BlacCode Talkerkwing">Code Talker</option>
                <option value="Dark Contract">Dark Contract</option>
                <option value="Dark Magician">Dark Magician</option>
                <option value="Noble Knight">Noble Knight</option>
            </select>

        </div>
    </div>


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
import ResultMessage from './ResultMessage.vue';


export default {
    name: 'AppSelect',

    components: {
        ResultMessage,
    },

    data() {
        return {
            store,
        }
    }
}
</script>


<style></style>