<template>
  <div>
    <h1>Ils ont vu votre profil</h1>
    <div class="essai">
      <img src="object.url" />
    </div>
  </div>
</template>
 
<script>
export default {
  name: "ProfilConsulté",

  date() {
    return {
      object: [
        { url: "../../assets/pictures/inscription_img_1.png" },
        { url: "../../assets/pictures/inscription_img_1.png" },
        { url: "../../assets/pictures/inscription_img_1.png" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.essai {
  width: 100%;
}
</style>
