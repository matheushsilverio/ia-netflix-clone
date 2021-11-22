<template>
  <BaseLayout>
    <v-container>
      <div class="movie-content">
        <h1>{{ movie.title }}</h1>
        <p>{{ movie.description }}</p>
        <v-rating v-model="movie.averageNote" :length="10" color="amber" dense medium></v-rating>
      </div>
      <div class="movie-theater">
        <vue-friendly-iframe className="screen" :src="link" @load="onLoad"></vue-friendly-iframe>
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
  margin-top: 2em;
  width: 100%;
  height: 720px;

  .screen {
    width: 100%;
    height: 550px;
  }
}
</style>
