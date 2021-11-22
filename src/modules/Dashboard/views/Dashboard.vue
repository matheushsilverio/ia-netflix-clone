<template>
  <BaseLayout>
    <v-container>
      <div class="categories-content">
        <Category
          :title="categoria.title"
          :id="`category-${index}`"
          v-for="(categoria, index) of categorias"
          :key="index"
        />
      </div>
    </v-container>
  </BaseLayout>
  <!-- <section id="dashboard">
    <div class="header">
      <img
        src="https://fontmeme.com/permalink/211121/93fa84c1a10c91ae3eaf69453df593e2.png"
        alt="filmes10"
        style="height: 60px"
      />
      <v-btn class="button-header" text large>
        Home
      </v-btn>
      <v-btn class="button-header" text large tag="rounter-link" to="/sugestao">
        Sugestão
      </v-btn>
    </div>
    <div class="teste">
      <div>

      </div>
    </div>
  </section> -->
</template>

<script>
import Category from "@/modules/Dashboard/components/Category.vue";
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: {
    Category
  },
  data() {
    return {
      categorias: [
        {
          title: "Action"
        },
        {
          title: "Adventure"
        },
        {
          title: "Animation"
        },
        {
          title: "Comedy"
        },
        {
          title: "Sci-Fi"
        },
        {
          title: "Drama"
        },
        {
          title: "Horror"
        },
        {
          title: "Romance"
        }
      ]
    };
  },
  computed: {
    ...mapGetters("User", ["userStore"])
  }
};
</script>

<style lang="scss" scoped>
.categories-content {
  width: 100%;
}
</style>
