<template>
  <section id="auth-layout">
    <div class="auth-layout-container">
      <div class="auth-layout-content">
        <v-card rounded elevation="2" class="auth-card-content">
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

    .auth-card-content {
      padding: 1rem;
    }
  }
}
</style>
