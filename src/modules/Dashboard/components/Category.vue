<template>
  <div class="card-container">
    <h2>
      {{ title }}
    </h2>

    <div class="card-content" :id="id">
      <Flicking :plugins="plugins" :options="{ align: 'prev', circular: true }">
        <v-card class="card" v-for="movie in movies" :key="movie.id">
          <v-card-title>{{ movie.title }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :length="10"
                v-model="movie.averageNote"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                {{ movie.averageNote }}
              </div>
            </v-row>

            <div style="margin-top: 20px">
              {{ movie.genre }}
            </div>
          </v-card-text>
          <div style="text-align: end; margin-right: 10px">
            <v-btn text color="#E50914" tag="router-link" :to="`/dashboard/movies/${movie.id}`">
              Assistir
            </v-btn>
          </div>
        </v-card>
        <div slot="viewport" class="flicking-pagination"></div>
      </Flicking>
    </div>
  </div>
</template>

<script>
import { movieServices } from "../services";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";

export default {
  name: "Category",
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      plugins: [new Pagination({ type: "bullet" })],
      movies: []
    };
  },
  created() {
    this.loadMovies(this.title);
  },
  methods: {
    async loadMovies(title) {
      this.movies = await movieServices.getByCategory(title);
    }
  }
};
</script>

<style lang="scss">
.card-container {
  .card-content {
    display: flex;
    padding: 15px;
    margin-bottom: 30px;

    .card {
      width: 350px;
      min-height: 175px;
      margin-right: 10px;

      .v-card__title {
        height: 110px;
      }
    }
  }

  .flicking-pagination {
    bottom: -10px;
  }
}
</style>
