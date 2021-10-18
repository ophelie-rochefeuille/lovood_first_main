<template>
<header>
 
 <div class="header-main">
   <img class="logo-lovood" alt="logo" src="../assets/pictures/logo.png">
   <div class="buttons-main">
   <button class="button-header" type="button">Connexion</button>
   <router-link to='/inscription' class="button-header">Inscription</router-link>
    </div>
</div>

</header>

</template>
 
<script>
export default {
 name: 'Header',
 props: {
   msg: String
 }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "../assets/variables_scss/variables.scss";

header {
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: #ffffff;
}

.header-main{
display:flex;
justify-content: space-between;
margin-left: auto;
margin-right: auto;
}

.buttons-main{
  display:flex;
}
 
.logo-lovood{
width: 70px;
}
.button-header{
margin: 0px 5px;
border: none;
background: none;
font-family: "quicksand-regular";
font-size: 18px;
}
 
</style>
