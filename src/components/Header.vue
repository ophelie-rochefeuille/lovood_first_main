<template>
<header>
 
 <div class="header-main">
   <img class="logo-lovood" alt="logo" src="../assets/pictures/logo.png">
   <div class="buttons-main">
   <button class="button-header" type="button">Connexion</button>
   <button class="button-header" type="button">Inscription</button>
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
@include grid-lg;
display: grid;
max-width: 1440px;
margin-left: auto;
margin-right: auto;
}

.logo-lovood{
  grid-column: 1/ span 2;
  width: 100%;
}

.buttons-main{
  display:flex;
  width: 100%;
grid-column: 11/ span 2;
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
