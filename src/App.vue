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

      let urlApi = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

      if (store.select.length > 0) {
        urlApi += `?archetype=${store.select}`;
      }else{
        urlApi += `?num=90&offset=0`;
      }

      axios.get(urlApi)
        .then(response => {
          this.store.loading = false;
          
          this.store.charactersList = response.data.data;
          console.log(this.store.charactersList)
        })
        .catch(err => {
          console.log(err);
          this.store.charactersList = [];
          this.store.loading = false;
          console.log('La ricerca non ha dato risultati');
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
    <AppSelect @mysdoSelect="getCharacters" />
    <CharactersList />
  </main>
  <Loading />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
