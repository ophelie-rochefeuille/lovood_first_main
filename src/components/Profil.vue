<template>
  <div>
    <Header />
    <h1>Bonjour</h1>
    <ProfilConsulte />
    <SideMenu />
  </div>
</template>
 
<script>
import Header from "./Header.vue";
import SideMenu from "./SideMenu.vue";
import ProfilConsulte from "./mainPageProfil/ProfilConsulté.vue";

export default {
  name: "Profil",
  components: {
    Header,
    SideMenu,
    ProfilConsulte,
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/variables_scss/variables.scss";
</style>
