<template>
  <div>
    <h2>
      {{ title }}
    </h2>

    <div class="card-content">
      <v-card class="card" v-for="movie in movies" :key="movie.id">
        <v-card-title>{{ movie.original_title }}</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              v-model="movie.vote_average"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">
              {{ movie.vote_average }}
            </div>
          </v-row>

          <div style="margin-top: 20px">
            {{ movie.release_date }}
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import actionService from "@/modules/Dashboard/services/actionService.js";

export default {
  name: "Category",
  props: {
    title: {
      type: String,
      required: Boolean
    }
  },
  data() {
    return {
      isLoading: false,
      movies: []
    };
  },
  created() {
    this.getMoviesAction();
  },
  methods: {
    getMoviesAction() {
      return actionService.get().then(({ data }) => {
        console.log(data);
        this.movies = data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.card-content {
  display: flex;
  padding: 15px;

  .card {
    max-width: 250px;
    margin-right: 10px;
  }
}
</style>
