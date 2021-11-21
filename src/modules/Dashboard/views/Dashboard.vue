<template>
  <section id="dashboard">
    <div class="header">
      <img
        src="https://fontmeme.com/permalink/211121/93fa84c1a10c91ae3eaf69453df593e2.png"
        alt="filmes10"
        style="height: 60px"
      />
      <v-btn class="button-header" text large tag="rounter-link" to="/">
        Home
      </v-btn>
      <v-btn class="button-header" text large tag="rounter-link" to="/">
        Sugestão
      </v-btn>
    </div>
    <div class="teste">
      <div>
        <Category :title="`Sugestão para `" />
        <Category :title="categoria.title" v-for="(categoria, index) of categorias" :key="index" />
      </div>
    </div>
  </section>
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
          title: "Ação"
        },
        {
          title: "Aventura"
        },
        {
          title: "Animação"
        },
        {
          title: "Drama"
        },
        {
          title: "Ficcção Científica"
        },
        {
          title: "Romance"
        },
        {
          title: "Terror"
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
#dashboard {
  height: 100%;
  width: 100%;
  background-color: #000;

  .header {
    display: flex;
    padding: 20px;

    .button-header {
      margin-left: 40px;
      padding: 25px;
      color: #fff;
    }
  }

  .teste {
    padding: 30px;

    .cards {
      margin-top: 15px;
    }
  }
}
</style>
