<template>
  <div>
    <NavbarComponent :companyName="companyName" />
    <main>
      <div class="titulo">
        <h1>Resorts</h1>
      <p>Descubre los mejores resorts!</p>
      </div>
      <table class="resorts-table">
        <thead>
          <tr>
            <th>Resort</th>
            <th>Ciudad</th>
            <th>País</th>
            <th>Guías</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="resort in resorts" :key="resort.id">
            <!-- Resort Name -->
            <td>{{ resort.name }}</td>

            <!-- City -->
            <td>{{ resort.city }}</td>

            <!-- Country -->
            <td>{{ resort.country }}</td>

            <!-- Number of Guides -->
            <td>{{ resort.guides }}</td>

            <!-- Action Buttons -->
            <td>
              <button class="btn btn-secondary" @click="showDetails(resort)">
                Ver más
              </button>
              <router-link
                :to="{ name: 'Reservas', query: { resort: resort.name } }"
                class="btn btn-primary"
              >
                Reservar
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Modal resort-->
      <div v-if="selectedResort" class="modal-overlay" @click.self="closeDetails">
        <div class="modal">
          <h2>{{ selectedResort.name }}</h2>
          <img
            :src="selectedResort.image"
            alt="Resort Image"
            class="resort-image"
          />
          <p><strong>Stars:</strong> {{ selectedResort.stars }}</p>
          <p><strong>Price/Night:</strong> ${{ selectedResort.price_per_night }}</p>
          <p><strong>Amenities:</strong> {{ selectedResort.amenities.join(", ") }}</p>
          <p><strong>Tours:</strong> {{ selectedResort.tours }}</p>
          <button class="btn btn-secondary" @click="closeDetails">
            Close
          </button>
        </div>
      </div>
    </main>
    <FooterComponent :year="year" />
  </div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "ResortsView",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      companyName: "Tourism Company",
      year: new Date().getFullYear(),
      resorts: [], 
      selectedResort: null,
    };
  },
  created() {
    // Fetch
    fetch("/bases/resorts.json")
      .then((response) => response.json())
      .then((data) => {
        this.resorts = data; 
      })
      .catch((error) => {
        console.error("Error fetching resorts:", error);
      });
  },
  methods: {
    showDetails(resort) {
      this.selectedResort = resort;
    },
    closeDetails() {
      this.selectedResort = null;
    },
  },
};
</script>

<style scoped>

.titulo{
  padding-left: 25px;
}

.resorts-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px auto;
  font-size: 0.9rem;
}

.resorts-table th,
.resorts-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;

}

.resorts-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.resorts-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.resorts-table tbody tr:hover {
  background-color: #f1f1f1;
}

.btn {
  margin: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  text-decoration: none;
}

.btn-primary {
  background-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
}

.resort-image {
  width: 100%;
  height: auto;
  margin: 10px 0;
  border-radius: 5px;
  object-fit: cover;
}
</style>
