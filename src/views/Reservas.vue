<template>
    <div>
      <NavbarComponent :companyName="companyName" />
      <main class="reservation-container">
        <h1>Make a Reservation</h1>
        <form @submit.prevent="submitReservation">
          <!-- nombre -->
          <div class="form-group">
            <label for="name">Nombre completo</label>
            <input
              type="text"
              id="name"
              v-model="reservation.name"
              placeholder="ingresa tu nombre completo"
              required
            />
          </div>
  
          <!-- mail -->
          <div class="form-group">
            <label for="email">Mail</label>
            <input
              type="email"
              id="email"
              v-model="reservation.email"
              placeholder="ingresa tu mail"
              required
            />
          </div>
  
          <!-- dato -->
          <div class="form-group">
            <label for="date"> Datos para reserva</label>
            <input
              type="date"
              id="date"
              v-model="reservation.date"
              required
            />
          </div>
  
          <!-- Guests Field -->
          <div class="form-group">
            <label for="guests">Cantidad de personas</label>
            <input
              type="number"
              id="guests"
              v-model="reservation.guests"
              min="1"
              placeholder="Enter number of guests"
              required
            />
          </div>
  
          <!-- Submit Button -->
          <button type="submit" class="btn btn-primary">Confirmar reserva</button>
        </form>
      </main>
      <FooterComponent :year="year" />
    </div>
  </template>
  
  <script>
  import NavbarComponent from "../components/NavbarComponent.vue";
  import FooterComponent from "../components/FooterComponent.vue";
  
  export default {
    name: "ReservasView",
    components: {
      NavbarComponent,
      FooterComponent,
    },
    data() {
      return {
        companyName: "Tourism Company",
        year: new Date().getFullYear(),
        reservation: {
          name: "",
          email: "",
          date: "",
          guests: 1,
        },
      };
    },
    methods: {
      submitReservation() {
        console.log("Reservation submitted:", this.reservation);
        alert(
          `Reservation confirmed for ${this.reservation.name} on ${this.reservation.date} for ${this.reservation.guests} guests.`
        );
        // Clear the form
        this.reservation.name = "";
        this.reservation.email = "";
        this.reservation.date = "";
        this.reservation.guests = 1;
      },
    },
  };
  </script>
  
  <style scoped>
  .reservation-container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  