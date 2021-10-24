<template>
  <div>
    <Header />

    <h1>Bonjour</h1>
  </div>
</template>
 
<script>
import Header from "./Header.vue";

export default {
  name: "Profil",
  components: {
    Header,
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/variables_scss/variables.scss";
</style>
