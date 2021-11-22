<template>
  <AuthLayout>
    <div id="signup-content">
      <div class="signup-header">
        <h1>Registrar</h1>
        <p>Crie sua conta e tenha acesso limitado a filmes e séries.</p>
      </div>

      <div class="signup-form mt-5">
        <Forms @submit="onSubmit" @cancel="$router.push({ name: 'Login' })">
          <div class="form-group">
            <ValidationProvider v-slot="{ errors }" name="Name" rules="required">
              <v-text-field
                v-model="user.name"
                :error-messages="errors"
                label="Name"
                type="text"
                solo
                required
                append-icon="person"
              ></v-text-field>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <ValidationProvider v-slot="{ errors }" name="Email" rules="required">
              <v-text-field
                v-model="user.email"
                :error-messages="errors"
                label="Email"
                type="text"
                solo
                required
                append-icon="mail"
              ></v-text-field>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <ValidationProvider v-slot="{ errors }" name="Password" rules="required">
              <v-text-field
                v-model="user.password"
                :error-messages="errors"
                label="Password"
                type="password"
                solo
                required
                append-icon="lock"
              ></v-text-field>
            </ValidationProvider>
          </div>
        </Forms>
      </div>
    </div>
  </AuthLayout>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import AuthLayout from "../layouts/AuthLayout.vue";
import { userService } from "../services";
import userMixin from "../mixins/userMixin";

export default {
  name: "SignUp",
  mixins: [userMixin],
  components: {
    AuthLayout,
    ValidationProvider
  },
  data() {
    return {
      user: {},
      loading: false
    };
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      await this.createUser();

      this.loading = false;
      this.authenticateUser(this.user.email, this.user.password);
    },
    createUser() {
      return userService.create(this.user);
    }
  }
};
</script>

<style lang="scss" scoped>
#signup-content {
  .signup-header {
    margin-bottom: 3em;
  }
  .signup-footer {
    button {
      font-size: 0.7em !important;
    }
  }
}
</style>
