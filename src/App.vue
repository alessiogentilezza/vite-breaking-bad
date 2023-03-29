<script >
import axios from 'axios';
import { store } from './store.js';

import TheHeader from './components/TheHeader.vue';
import AppSearch from './components/AppSearch.vue';
import CharactersList from './components/CharactersList.vue';
import Loading from './components/Loading.vue';


export default {
  components: {
    TheHeader,
    AppSearch,
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
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=metal%20raiders&num=18&offset=0')
        // axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes')


        .then(response => {
          this.store.loading = true;

          setTimeout(() => {
            this.store.loading = false;

            console.log("this is the first message");
          }, 5000);


          this.store.charactersList = response.data.data;
          console.log(this.store.charactersList)

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
    <AppSearch />
    <CharactersList />

  </main>

  <Loading />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
