<template>
  <div>
    <NavbarComponent :companyName="companyName" />
    <main class="main">
      <h1>Bienvenido a {{ companyName }}</h1>
      <p>Tu guía para vivir experiencias únicas!</p>
      <div class="buttons">
        <router-link to="/guias" class="btn">Explora Guias</router-link>
        <router-link to="/resorts" class="btn">Descubre Resorts</router-link>
      </div>
    </main>
    <FooterComponent :year="year" />
  </div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      companyName: "Life Adventures",
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.main {
  text-align: center;
  color: white;
  padding: 50px;
  background: url("@/Depositphotos_101992720_XL.jpg") no-repeat center center;
  background-size: cover; /* Ensure the image covers the entire background */
  height: 100vh; /* Full screen height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.buttons {
  margin-top: 50px;
  margin-bottom: 50px;
}

.btn {
  margin: 10px;
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
}

.btn:hover {
  background: #4040e7;
}
</style>
