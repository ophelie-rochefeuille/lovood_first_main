<template>
  <div class="main-div-inscription-one">
    <div class="div-picture-inscription-one">
      <img
        class="inscription-pic-one"
        alt="couple"
        src="../../assets/pictures/inscriptionFicheDeuxImg.png"
      />
    </div>

    <div class="form-one">
      <div class="card card-two">
        <form @submit="checkForm" action="/monprofil">
          <h1 class="title-inscriptionFicheTrois">
            Quel genre de relation cherches-tu ?
          </h1>
          <button class="button-choice-relatioship" type="button">
            Sucré<span class="explications-choices"
              >pour une discussion autour d'un café</span
            >
          </button>
          <button class="button-choice-relatioship" type="button">
            Salé<span class="explications-choices"
              >pour ceux à qui la discussion du café ne suffit pas</span
            >
          </button>
          <button class="button-choice-relatioship" type="button">
            Team superMix
            <span class="explications-choices"
              >pour ceux qui ne prennent pas de risque</span
            >
          </button>
          <input type="submit" value="Enfin la faim !" class="submit" />
        </form>
      </div>
    </div>
  </div>
</template>
 
<script>
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'  scoped>
@import "../../assets/variables_scss/variables.scss";

.main-div-inscription-one {
  @include grid-lg;
  display: grid;
  height: fit-content;
  align-items: center;
  height: 75vh;
}

.div-picture-inscription-one {
  grid-column: 2 / span 5;
  display: flex;
  align-items: center;
}
.inscription-pic-one {
  width: 100%;
}
.form-one {
  grid-column: 7 / span 5;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-two {
  background-color: #c0baf5;
  border-radius: 25% 10%;
  padding: 50px;
  height: 550px;
  margin: 20px 0px;
}

.title-inscriptionFicheTrois {
  font-family: "quicksand-bold";
  font-size: 28px;
}

.button-choice-relatioship {
  width: 70%;
  margin: 30px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #fff2b5;
  font-family: "quicksand-regular";
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.explications-choices {
  font-size: 16px;
}
.submit {
  border: none;
  background-color: #b2b5fa;
  border-radius: 20px;
  font-size: 28px;
  padding: 10px 20px;
  color: #fff2b5;
  border-radius: 25% 0%;
}
</style>
