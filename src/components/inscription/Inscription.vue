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
      <div class="card card-two">
        <form @submit="checkForm" action="/inscriptionPhaseDeux">
          <!-- Comment 
 <p >
  <b>Please correct the following error(s):</b>
    <ul>

    </ul>
  </p>
-->
          <p>
            <input
              placeholder="Nom"
              class="name input-inscription"
              type="text"
              name="Nom"
            />
          </p>

          <p>
            <input
              placeholder="Prénom"
              class="firstname input-inscription"
              type="text"
              name="Prenom"
            />
          </p>

          <p>
            <label class="label-inscription" for="bday"
              >Date de naissance</label
            >
            <input
              class="input-inscription"
              type="date"
              id="bday"
              name="bday"
              required
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            />
          </p>

          <p>
            <label class="label-inscription">Genre</label>
            <select
              class="genre input-inscription"
              name="genre"
              placeholder="Nom"
            >
              <option>Femme</option>
              <option>Homme</option>
              <option>Autre</option>
              <option>Non genré</option>
            </select>
          </p>

          <input
            class="email-inscription input-inscription"
            for="email"
            type="email"
            placeholder="Please enter your email here"
            required
            v-model="email"
          />

          <p>
            <input
              placeholder="Nom d'utilisateur"
              class="name-user input-inscription"
              type="text"
              name="user"
            />
          </p>

          <p>
            <input type="submit" value="Inscris-toi !" class="submit" />
          </p>
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
}
.card-two {
  background-color: #c0baf5;
  border-radius: 25% 10%;
  padding: 50px;
  height: 550px;
  margin: 20px 0px;
}

.input-inscription {
  margin: 10px;
  font-size: 24px;
  color: #4e4e4e;
  font-family: "quicksand-regular";
  text-align: center;
  border: none;
  border-bottom: 1px solid #4e4e4e;
  width: 70%;
  height: 30px;
  background-color: #c0baf5;
}

p {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.label-inscription {
  font-family: "quicksand-regular";
  font-size: 18px;
  margin-top: 10px;
}

.submit {
  border: none;
  background-color: #b2b5fa;
  border-radius: 25% 0%;
  font-size: 28px;
  padding: 10px 20px;
  color: #fff2b5;
}
</style>
