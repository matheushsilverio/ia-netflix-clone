<template>
  <section id="auth-layout">
    <div class="logo-content">
      <img
        src="https://fontmeme.com/permalink/211121/93fa84c1a10c91ae3eaf69453df593e2.png"
        alt="filmes10"
        style="height: 75px"
      />
    </div>
    <div class="auth-layout-container">
      <div class="auth-layout-content">
        <v-card rounded elevation="4" class="auth-card-content backgroundPrimary">
          <slot />
        </v-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AuthLayout"
};
</script>

<style lang="scss" scoped>
#auth-layout {
  height: 100%;
  width: 100%;
  background-color: #000;

  .logo-content {
    margin: 20px 20px 5px;
  }

  .auth-layout-container {
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      width: 100%;
      max-width: 100% !important;
    }

    .auth-card-content {
      padding: 3.5rem;
      width: 440px;
      background-color: #070705 !important;
    }
  }
}
</style>
