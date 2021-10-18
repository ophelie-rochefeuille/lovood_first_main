<template>
  <div class="main-div-inscription-one">
    <div class="div-picture-inscription-one">
      <img
        class="inscription-pic-one"
        alt="couple"
        src="../../assets/pictures/inscription_img_1.png"
      />
    </div>

    <div class="form-one">
      <div class="card">
        <div class="card">
          <form @submit="checkForm" action="https://vuejs.org/" method="post">
            <!-- Comment 
 <p >
  <b>Please correct the following error(s):</b>
    <ul>

    </ul>
  </p>
-->
            <p>
              <label>Nom</label>
              <input class="name" type="text" name="Nom" />
            </p>

            <p>
              <label>Prénom</label>
              <input class="firstname" type="text" name="Prenom" />
            </p>

            <p>
              <label for="bday"
                >Veuillez saisir votre date de naissance :</label
              >
              <input
                type="date"
                id="bday"
                name="bday"
                required
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              />
            </p>

            <p>
              <label>Genre</label>
              <select class="genre" name="genre">
                <option>Femme</option>
                <option>Homme</option>
                <option>Autre</option>
                <option>Non genré</option>
              </select>
            </p>

            <input
              class="email-inscription"
              for="email"
              type="email"
              placeholder="Please enter your email here"
              required
              v-model="email"
            />

            <p>
              <label>Nom d'utilisateur</label>
              <input class="name-user" type="text" name="user" />
            </p>

            <p>
              <input type="submit" value="Submit" />
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
const init = () => {
  console.log("init");

  const cards = document.querySelectorAll(".card");
  console.log(cards);
  cards.forEach((card, i) => {
    const offsetLeft = `${i * Math.random(10) * 10}px`;
    console.log(offsetLeft);
    const offsetRight = `${i * Math.random(10) * -10}px`;
    if (i % 2 == 0) {
      card.style.setProperty("--offset", offsetLeft);
    } else {
      card.style.setProperty("--offset", offsetRight);
    }
    const nbCards = cards.length;
    const color = `rgb(0, ${255 - (i / 20) * 255}, 0)`;
    card.style.setProperty("--color", color);
    const z = nbCards - i;
    card.style.setProperty("--zIndex", z);
  });
};

init();
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'  scoped>
@import "../../assets/variables_scss/variables.scss";
.main-div-inscription-one {
  @include grid-lg;
  display: grid;
  height: fit-content;
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
.card {
  --offset: 0;
}
</style>
