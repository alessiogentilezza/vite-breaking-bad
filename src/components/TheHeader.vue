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
  <div class="logo">
    <img src="src/assets/Yu-Gi-Oh!.svg" alt="">
  </div>
  <div class="container">
      <h1 class="mb-0">Yu-Gi-Oh-Api</h1>
  </div>
</header>
  
</template>

<style scoped lang="scss">
header{
  height: 70px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
header img{
  width: 70px;
}

</style>