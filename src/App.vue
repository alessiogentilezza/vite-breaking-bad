<script >
import axios from 'axios';
import { store } from './store.js';

import TheHeader from './components/TheHeader.vue';
import CharactersList from './components/CharactersList.vue';

export default {
  components: {
    TheHeader,
    CharactersList,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCharacters() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes')
      .then(response => {
        this.store.charactersList = response.data.data;
      });
    }
  },
  created() {
    this.getCharacters();
  }
}

</script>

<template>
  <TheHeader></TheHeader>
  <main>
    <CharactersList />

  </main>

</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
