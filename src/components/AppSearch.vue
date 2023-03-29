<template>
    <div class="container px-5 pt-5">
        <div class="row p-4">
            Lorem ipsum dolor sit amet.
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


<style scoped lang="scss">
.row {
    background-color: #222529;
    color: white;
}
</style>