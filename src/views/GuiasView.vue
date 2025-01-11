<template>
  <div>
    <NavbarComponent :companyName="companyName" />
    <div class="row">
      <!-- Loop-->
      <div class="col-md-4" v-for="guide in guides" :key="guide.email">
        <div>
          <div class="card">
            <img :src="guide.picture.large" class="card-img-top" alt="Guide Image" />
            <div class="card-body">
              <h5 class="card-title">
                {{ guide.name.title }} {{ guide.name.first }} {{ guide.name.last }}
              </h5>
              <p class="card-text">
                <strong>Location:</strong> {{ guide.location.city }}, {{ guide.location.state }}, {{ guide.location.country }}
              </p>
              <p class="card-text">
                <strong>Experience:</strong> {{ guide.experience }} years
              </p>
              <p class="card-text">
                <strong>Rating:</strong> {{ guide.ratings.stars }} / 5
                <span v-html="generateStars(guide.ratings.stars)"></span>
              </p>
             
              <router-link
                :to="{ name: 'Reservas', query: { guide: guide.name.first + ' ' + guide.name.last, resort: guide.resort_id } }"
                class="btn btn-primary"
              >
                Reservar
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent :year="year" />
  </div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "GuiasView",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      companyName: "Tourism Company",
      year: new Date().getFullYear(),
      guides: [], 
    };
  },
  created() {
    
    fetch("/bases/guias.json")
      .then((response) => response.json())
      .then((data) => {
        this.guides = data.results;
      })
      .catch((error) => {
        console.error("Error fetching guides:", error);
      });
  },
  methods: {
   
    generateStars(rating) {
      const fullStars = Math.floor(rating);
      const halfStars = rating % 1 >= 0.5 ? 1 : 0;
      const emptyStars = 5 - fullStars - halfStars;
      return "★".repeat(fullStars) + "☆".repeat(emptyStars);
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 15px; 
  justify-content: center; 
}

.card {
  margin: 10px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  width: 15rem; 
}

.card-img-top {
  height: 120px;
  object-fit: cover; 
  display: block;
  margin: 0 auto; 
  border-radius: 8px 8px 0 0;
}

.card img{
    margin-top: 10px;
}

.card-body {
  text-align: center;
  font-size: 0.9rem;
  padding: 10px;
}

.btn {
  margin-top: 10px;
  padding: 5px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
