<script>
export default {
  name: "TheHeader",

  data() {
    return {
    };
  },

};
</script>

<template>
<header>
  <div class="wrap">
      <h1>Yu-Gi-Oh-Api</h1>
  </div>
</header>
  
</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;
header{
  height: 70px;
  background-color: white;
  display: flex;
  align-items: center;
  
}
.wrap{
  width: 80%;
  margin: 0 auto;
}

</style>