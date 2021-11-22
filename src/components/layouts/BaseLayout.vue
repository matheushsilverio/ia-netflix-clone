<template>
  <section class="base-layout dark">
    <header>
      <div class="alignment">
        <div class="navbar">
          <div class="navbar-left">
            <img
              src="https://fontmeme.com/permalink/211121/93fa84c1a10c91ae3eaf69453df593e2.png"
              alt="filmes10"
              style="height: 60px"
            />
          </div>
          <div class="navbar-right">
            <p>{{ userStore.name }}</p>
            <v-avatar>
              <img src="https://randomuser.me/api/portraits/men/51.jpg" />
            </v-avatar>
          </div>
        </div>
      </div>
    </header>

    <v-main>
      <slot />
    </v-main>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BaseLayout",
  computed: {
    ...mapGetters("User", ["userStore"])
  }
};
</script>

<style lang="scss">
.base-layout {
  height: 100%;
  width: 100%;
  overflow-y: auto;

  .alignment {
    width: 93%;
    margin: 0 auto;
    height: 100%;
  }

  header {
    width: 100%;
    min-height: 40px;
    margin-bottom: 1em;
    padding: 0.5em 0;

    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .navbar-left,
      .navbar-right {
        display: flex;
      }

      .navbar-right {
        align-items: center;

        p {
          margin-right: 1em;
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
