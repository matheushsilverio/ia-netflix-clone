<template>
  <AuthLayout>
    <div id="login-content">
      <div class="login-header">
        <h1>Sign In.</h1>
        <p>Log in with your data that you entered during your registration</p>
      </div>

      <div class="login-form mt-5">
        <Forms hide-footer v-slot="{ handleSubmit }">
          <div class="form-group">
            <ValidationProvider v-slot="{ errors }" name="Email" rules="required">
              <v-text-field
                v-model="auth.username"
                :error-messages="errors"
                label="Email"
                type="text"
                outlined
                required
                append-icon="mail"
              ></v-text-field>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <ValidationProvider v-slot="{ errors }" name="Password" rules="required">
              <v-text-field
                v-model="auth.password"
                :error-messages="errors"
                label="Password"
                type="password"
                outlined
                required
                append-icon="lock"
              ></v-text-field>
            </ValidationProvider>
          </div>

          <v-btn block color="primary" @click="handleSubmit(onSubmit)"
            >Sign In
            <v-icon right dark>
              login
            </v-icon></v-btn
          >
        </Forms>

        <div class="login-footer mt-3">
          <v-btn text small color="primary">Forgot Password?</v-btn>
          <v-btn text small color="primary" tag="rounter-link" to="/sign-up"
            >Create new account</v-btn
          >
        </div>
      </div>
    </div>
  </AuthLayout>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import AuthLayout from "../layouts/AuthLayout.vue";
import userMixin from "../mixins/userMixin";

export default {
  name: "Login",
  mixins: [userMixin],
  components: {
    AuthLayout,
    ValidationProvider
  },
  data() {
    return {
      auth: {}
    };
  },
  methods: {
    onSubmit() {
      this.authenticateUser(this.auth.username, this.auth.password);
    }
  }
};
</script>

<style lang="scss" scoped>
#login-content {
  .login-header {
    margin-bottom: 3em;
  }
  .login-footer {
    button {
      font-size: 0.7em !important;
    }
  }
}
</style>
