<template>
  <div>
    <header>
      <div class="header-main">
        <img class="logo-lovood" alt="logo" src="../assets/pictures/logo.png" />
        <div class="buttons-main">
          <router-link to="/swipes" class="button-header">Swipes</router-link>
          <router-link to="/messagerie" class="button-header"
            >Messagerie</router-link
          >
          <router-link to="/monprofil" class="button-header"
            >Profil</router-link
          >
          <router-link to="/contact" class="button-header">Contact</router-link>
          <button class="button-header">Déconnexion</button>
        </div>
      </div>
    </header>
  </div>
</template>
 
<script>
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/variables_scss/variables.scss";
</style>
