<template>
  <BaseLayout>
    <v-container>
      <div class="movie-content">
        <h1>{{ movie.title }}</h1>
        <p>{{ movie.description }}</p>
        <v-rating
          :length="10"
          color="red lighten-3"
          background-color="grey lighten-1"
          large
        ></v-rating>
      </div>
      <div class="movie-theater">
        <vue-friendly-iframe className="screen" :src="link" @load="onLoad"></vue-friendly-iframe>
      </div>
      <div>
        <!-- <Category title="Filmes Recomendados" /> -->
      </div>
    </v-container>
  </BaseLayout>
</template>

<script>
import Category from "@/modules/Dashboard/components/Category.vue";
import { mapGetters } from "vuex";
import { movieServices } from "../services";

export default {
  name: "Filme",
  components: {
    Category
  },
  data() {
    return {
      movie: null
    };
  },
  computed: {
    ...mapGetters("User", ["userStore"]),
    link() {
      return `https://embed.warezcdn.com/filme/${this.movie?.imdbId}`;
    },
    id() {
      return this.$route.params.id;
    }
  },
  created() {
    this.loadMovie();
  },
  methods: {
    onLoad() {},
    loadMovie() {
      movieServices.getById(this.id).then(response => {
        this.movie = response;
      });
    }
  }
};
</script>

<style lang="scss">
.movie-content {
  width: 100%;
}
.movie-theater {
  width: 100%;
  height: 720px;

  .screen {
    width: 100%;
    height: 550px;
  }
}
</style>
