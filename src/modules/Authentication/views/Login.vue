<template>
  <AuthLayout>
    <div id="login-content">
      <h1>Log in.</h1>
      <p>Log in with your data that you entered during your registration</p>

      <div class="login-form"></div>

      <p>Don't have an account?</p>
    </div>
  </AuthLayout>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import AuthLayout from "../layout/AuthLayout.vue";

export default {
  components: {
    AuthLayout
  }
};
</script>
