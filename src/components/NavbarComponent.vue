<template>
  <nav class="navbar">
    <h1>{{ companyName }}</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/guias">Guias</router-link></li>
      <li><router-link to="/resorts">Resorts</router-link></li>
      <!--Reservar link -->
      <li><router-link to="/reservas" class="reservar-btn">Reservar</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  props: {
    companyName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #007bff;
  color: white;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 15px;
}

.navbar a {
  text-decoration: none;
  color: white;
}

.navbar a:hover {
  color: #4040e7;
}

/* Style Reservar button */
.reservar-btn {
  font-weight: bold;
  padding: 5px 10px;
  border: 1px solid white;
  border-radius: 5px;
  transition: 0.3s;
}

.reservar-btn:hover {
  background: white;
  color: #007bff;
}
</style>
