<template>
  <footer>
    <div class="footer">
      <div class="footer-main">
        <div class="presentation-footer">
          <img
            class="logo-lovood"
            alt="logo"
            src="../assets/pictures/logo.png"
          />
          <h1>LOVOOD</h1>
        </div>

        <div class="social-network-main">
          <a class="social-network-icon instagram"
            ><img
              class="pic-social-network"
              src="../assets/pictures/instagram_logo.svg"
          /></a>
          <a class="social-network-icon twitter"
            ><img
              class="pic-social-network"
              src="../assets/pictures/twitter_logo.svg"
          /></a>
          <a class="social-network-icon facebook"
            ><img
              class="pic-social-network"
              src="../assets/pictures/facebook_logo.svg"
          /></a>
        </div>

        <div class="footer-items">
          <a class="items">Nous contacter</a> <span>/</span>
          <a class="items">A propos</a> <span>/</span>
          <a class="items">Confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
</template>
 
<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/variables_scss/variables.scss";

footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.footer {
  background-color: #fff2b5;
  display: flex;
  justify-content: center;
  width: 100%;
}

.presentation-footer {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "quicksand-bold";
    font-size: 40px;
    color: #b2b5fa;
  }
}
.logo-lovood {
  max-width: 70px;
}

.social-network-main {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}

.pic-social-network {
  width: 30px;
}

.social-network-icon {
  margin: 10px;
}
.items {
  margin: 10px;
}
</style>
