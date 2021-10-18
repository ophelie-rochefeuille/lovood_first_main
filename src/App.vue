<template>
 <div id="app">
    <router-view />
   <Footer />
 </div>
</template>
 
<script>


import Footer from './components/Footer';

 
export default {
 name: 'App',
 components: {
   Footer
 }
}
</script>
 
<style>
@import "./assets/fonts/fonts.scss";
  
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
}
 
body{
margin: 0
}
</style>