<template>
  <AuthLayout>
    <div id="signup-content">
      <div class="signup-header">
        <h1>Sign Up</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                outlined
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
                outlined
                required
                append-icon="person"
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
                outlined
                required
                append-icon="lock"
              ></v-text-field>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <ValidationProvider v-slot="{ errors }" name="Country" rules="required">
              <v-select
                v-model="user.country_id"
                :items="countries"
                :error-messages="errors"
                label="Country"
                outlined
                required
                append-icon="map"
              ></v-select>
            </ValidationProvider>
          </div>
        </Forms>
      </div>
    </div>
  </AuthLayout>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import AuthLayout from "../layout/AuthLayout.vue";

export default {
  name: "SignUp",
  components: {
    AuthLayout,
    ValidationProvider
  },
  data() {
    return {
      user: {},
      countries: []
    };
  },
  methods: {
    onSubmit() {
      console.log("teste");
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
