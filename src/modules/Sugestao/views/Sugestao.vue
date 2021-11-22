<template>
  <section id="sugestao">
    <div class="header">
      <img
        src="https://fontmeme.com/permalink/211121/93fa84c1a10c91ae3eaf69453df593e2.png"
        alt="filmes10"
        style="height: 60px"
      />
      <v-btn class="button-header" text large tag="rounter-link" to="/dashboard">
        Home
      </v-btn>
      <v-btn class="button-header" text large>
        Sugestão
      </v-btn>
    </div>
    <div class="teste">
      <div>
        <Category :title="`Sugestão para`" />
      </div>
    </div>
  </section>
</template>

<script>
import Category from "@/modules/Dashboard/components/Category.vue";
import { mapGetters } from "vuex";

export default {
  name: "Sugestao",
  components: {
    Category
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("User", ["userStore"])
  }
};
</script>

<style lang="scss" scoped>
#sugestao {
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
