<template>
 <div id="app">
   <Header msg="Hello"/>
   <HomePage /> 
   <Footer />
 </div>
</template>
 
<script>
import Header from './components/Header.vue';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
 
export default {
 name: 'App',
 components: {
   Header,
   HomePage,
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