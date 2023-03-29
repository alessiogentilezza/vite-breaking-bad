<template>
    <div class="loading" v-if="store.loading">
        <div class="d-flex align-items-center">
            <h1>Loading...</h1>
            <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'Loading',
    data() {
        return {
            store
        }
    }
}
</script>


<style lang="scss" scoped>
.loading {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>