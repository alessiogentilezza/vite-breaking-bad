<template>
    <div class="container p-5">
        <div class="col-3">
            <select @change="$emit('doSelect')" class="form-select" aria-label="Default select example" v-model="store.select">
                <option value="Adamancipator">Adamancipator</option>
                <option value="Archfiend">Archfiend</option>
                <option value="Batteryman">Batteryman</option>
                <option value="Blackwing">Blackwing</option>
            </select>
        </div>
    </div>


    <div class="container px-5">
        <div class="row p-4 bg-dark bg-gradient text-white">
            <div class="col-auto">
                Lorem ipsum dolor sit amet.
            </div>
        </div>
    </div>
</template>


<script>

import { store } from '../store.js';

export default {
    name: 'AppSearch',
    data() {
        return {
            store
        }
    }
}
</script>


<style></style>