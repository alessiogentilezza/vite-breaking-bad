<script >
import axios from 'axios';
import { store } from './store.js';

import TheHeader from './components/TheHeader.vue';
import AppSelect from './components/AppSelect.vue';
import CharactersList from './components/CharactersList.vue';
import Loading from './components/Loading.vue';


export default {
  components: {
    TheHeader,
    AppSelect,
    CharactersList,
    Loading,
  },

  data() {
    return {
      store
    }
  },

  methods: {


    getCharacters() {

      let urlApi = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=60&offset=0";


      if (store.select.length > 0) {
        urlApi += `?archetype=${store.select}`;
      }

      axios.get(urlApi)
        .then(response => {
          this.store.loading = false;
          setTimeout(() => {
            this.store.loading = false;
            console.log("this is the first message");
          }, 1000);
          this.store.charactersList = response.data.data;
          console.log(this.store.charactersList)
        })
    }
  },
  created() {
    this.getCharacters();
  }
}

</script>

<template>
  <TheHeader />
  <main>
    <!-- <AppSelect /> -->
    <AppSelect v:on-doSelect="getCharacters"/>
    <CharactersList />
  </main>
  <Loading />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
