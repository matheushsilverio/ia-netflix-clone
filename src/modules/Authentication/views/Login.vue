<template>
  <AuthLayout>
    <div id="login-content">
      <div class="login-header">
        <h1 class="login-text">Entrar</h1>
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
                solo
                required
              ></v-text-field>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <ValidationProvider v-slot="{ errors }" name="Password" rules="required">
              <v-text-field
                v-model="auth.password"
                :error-messages="errors"
                label="Senha"
                type="password"
                solo
                required
              ></v-text-field>
            </ValidationProvider>
          </div>

          <div style="margin: -25px 0 40px; text-align: end;">
            <v-btn text small color="#436373">Precisa de ajuda?</v-btn>
          </div>

          <v-btn style="height: 45px" block color="primary" @click="handleSubmit(onSubmit)">
            Entrar
          </v-btn>
        </Forms>

        <div class="login-footer mt-5">
          <p style="color: #436373; margin-top: 1.5px;">Novo por aqui ?</p>
          <v-btn text small color="#FFFF" tag="rounter-link" to="/sign-up">
            Criar Conta
          </v-btn>
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
    margin-bottom: 2em;

    .login-text {
      color: #fff;
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 28px;
    }
  }
  .login-footer {
    text-align: center;
    display: flex;

    button {
      font-size: 0.7em !important;
    }
  }
}
</style>
