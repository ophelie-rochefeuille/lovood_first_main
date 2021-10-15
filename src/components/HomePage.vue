<template>
<div>
 
 <div class="home-page-main-div">

<div class="main-div-home-pic">

  <div class="home-page-pic">
    <h1 class="title-home-page">L'amour commence aujourd'hui</h1>
    <div class="div-scroll">
      <span class="scroll">Scroll</span> 
      <img class="arrow-down" src="../assets/pictures/arrow_down.svg"  />
    </div>
 </div>
</div>
<div class="home-page-presentation">

  <div class="who-we-are-div">
    <h1 class="title-who-we-are">Qui sommes-nous? </h1>
    <img class="who-we-are-pic" src="../assets/pictures/who-we-are.png"   />
    <p class="paraph-who-we-are">Lovood est le site de rencontre pour les amoureux de nourriture.
Salé, sucré ou team super mix choisis ton camp et rencontre l'amour.</p>
  </div>

<div class="main-div-objectives-one">
  <div class="objectives-div-one">
  <img class="objectives-pic-one" src="../assets/pictures/who-we-are.png"   />
  
    <div class="choose-camp-div">
    <h2 class="title-choose-camp"> Choisis ton camp: </h2>
    <p class="paraph-choose-camp">Sucré , tu trouveras là...</p>
    <p class="paraph-choose-camp">Salé tu tomberas peut être sur...</p>
    <p class="paraph-choose-camp">Team superMix si tu ne veux pas prendre de risque</p>
    </div>
  </div>
</div>

<div class="main-div-objectives-two">
<div class="objectives-div-two">
    <div class="choose-profils-gouts">
    <h2 class="title-profils-gouts"> Des profils qui partagent les mêmes goûts. </h2>
    <p class="paraph-profils-gouts">Rencontre des personnes ayant les mêmes envies culinaires que toi.</p>
    </div>
    <img class="objectives-pic-two" src="../assets/pictures/who-we-are.png"   />
  </div>
</div>

<div class="main-div-objectives-three">
  <div class="objectives-div-three">
  <img class="objectives-pic-three" src="../assets/pictures/who-we-are.png"   />
  
    <div class="choose-discussion">
    <h2 class="title-discussion"> Discute avec tes matchs </h2>
    <p class="paraph-discussion">Fais connaissance avec les personnes qui te match.</p>
    </div>
  </div>
</div>
<div class="main-div-presentation-confidentiality">
  <div class="confidentiality-presentation-div"> 
  <h1 class="title-confidentiality-presentation"> Notre politique de confidentialité</h1>
  <p class="paraph-confidentiality-presentation">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet purus gravida quis blandit turpis cursus. Mattis aliquam faucibus purus in massa tempor.</p>
  </div>
  </div>
</div>
</div>
 
</div>
</template>
 
<script>

export default {
 name: 'HomePage',
 props: {
   
 }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "../assets/variables_scss/variables.scss";

.main-div-home-pic{
  background-color: #FFFBE8;
  display:flex;
  justify-content: center;
}

.home-page-pic{
  max-width: 1440px;
  @include grid-lg;
  display:grid; 
  margin:0;
  background-image:url("../assets/pictures/picture_couple_charte.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  grid-column: 1/ span 12;
  width: 100%;
  height: 90vh;
}

.title-home-page{
  grid-column: 1/ span 12;
  font-family: "quicksand-regular";
  color: #ffffff;
  padding-top: 50px;
}

.div-scroll{
grid-column: 1/ span 12; 
display: flex;
justify-content: end;
flex-direction: column;
align-items: center;
padding-left: 20px;
}

.scroll{
  font-family:"quicksand-light";
  font-size: 20px;
  color: #ffffff;
}

.arrow-down{
  max-width: 50px;
}

.who-we-are-div{
@include grid-lg; 
display: grid;
}

.title-who-we-are{
  grid-column: 1/ span 12;
}

.who-we-are-pic{
  width:100%;
  grid-column: 3/span 8;
}
.paraph-who-we-are{
  grid-column: 3/ span 8;
  font-size: 24px;
}

.objectives-div-one,
.objectives-div-two,
.objectives-div-three{
  max-width: 1440px;
margin-left: auto;
margin-right: auto;
  @include grid-lg; 
  display: grid;
  padding: 70px 10px;
  align-items: center;
}

.main-div-objectives-one,
.main-div-objectives-three{
  background-color: #FFFBE8;
  display:flex;
  justify-content: center;
}

.main-div-objectives-two{
  display:flex;
  justify-content: center;
}
.objectives-pic-one,
.objectives-pic-two,
.objectives-pic-three{
  width: 100%;

}

.objectives-pic-one,
.objectives-pic-three{
   grid-column: 2 / span 5;
}

.objectives-pic-two{
  grid-column: 7/ span 5; 
}

.choose-camp-div{

  grid-column: 7/ span 5;
  h2{
    font-size: 30px;
  }
  p{
    font-size: 20px;
  }
}

.choose-profils-gouts{
  grid-column: 2/ span 5;
  h2{
    font-size: 30px; 
  }
  p{
    font-size: 20px;
  }
}

.choose-discussion{
  grid-column: 7/ span 5; 
  h2{
    font-size: 30px;
  }
  p{
    font-size:20px;
  }
}

.main-div-presentation-confidentiality{
  display:flex;
  justify-content: center; 
}
.confidentiality-presentation-div{
max-width: 1440px;
padding-top: 90px;
@include grid-lg;
display: grid;
h1{
  grid-column: 2 / span 10;
  text-align: center;
}
p{
  grid-column: 2/ span 10;
  font-size: 24px;
}
}


</style>
