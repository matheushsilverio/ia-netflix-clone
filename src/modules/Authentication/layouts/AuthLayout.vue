<template>
  <section id="auth-layout">
    <div class="auth-layout-container">
      <div class="auth-layout-content">
        <v-card rounded elevation="4" class="auth-card-content">
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
  display: flex;
  flex-direction: row;
  background-color: rgb(47, 47, 255);

  .auth-layout-container {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      width: 100%;
      max-width: 100% !important;
    }

    .auth-card-content {
      padding: 2rem;
      max-width: 400px;
    }
  }
}
</style>
