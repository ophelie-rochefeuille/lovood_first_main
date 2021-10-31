<template>
  <div class="side-menu-main-div">
    <div class="div-presentation-mini-picture">
      <div class="div-name-and-picture">
        <img
          alt="photo de profil"
          src="../assets/pictures/profil_picture_mini.png"
        />
        <input type="button" class="add-button-profil" value="+" />
      </div>
      <span class="name-with-firstName-profil">{{ prenom }} {{ nom }} </span>
    </div>
    <ul class="globale-list-side-menu">
      <li class="list-item">Mon compte</li>
      <li class="list-item">mon profil</li>
      <li class="list-item">Sécurité</li>
      <li class="list-item">A propos</li>
      <li class="list-item">Confidentialité</li>
      <li class="list-item">Suppression</li>
    </ul>
  </div>
</template>
 
<script>
export default {
  name: "SideMenu",

  data() {
    return {
      nom: "Gonzalez",
      prenom: "Luc",
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/variables_scss/variables.scss";

.side-menu-main-div {
  max-width: 20%;
  position: absolute;
  bottom: 200px;
  left: 0;
}

.div-presentation-mini-picture {
  margin-bottom: 40px;
}

.list-item {
  list-style-type: none;
  text-align: initial;
  font-family: "quicksand-medium";
  font-size: 28px;
  padding: 30px 10px;
}

.name-with-firstName-profil {
  font-family: "quicksand-medium";
  font-size: 24px;
}

.add-button-profil {
  color: #fff2b5;
  background-color: #c0baf5;
  font-size: 35px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 20px;
}
</style>
