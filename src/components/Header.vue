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
header {
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: #ffffff;
  padding-top: 20px;
}

.header-main {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
}

.buttons-main {
  display: flex;
  align-items: center;
}

.logo-lovood {
  width: 70px;
}
.button-header {
  margin-left: 50px;
  margin-right: 10px;
  text-decoration: none;
  border: none;
  background: none;
  font-family: "quicksand-bold";
  font-size: 28px;
  color: #4e4e4e;
}
</style>
