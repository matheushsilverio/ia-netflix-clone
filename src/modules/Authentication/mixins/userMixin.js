import { mapActions } from "vuex";
import authenticateService from "@/services/authenticateService";
import tokenService from "@/services/tokenService";

export default {
  methods: {
    ...mapActions("User", ["setUserStore"]),
    authenticateUser(email, password) {
      authenticateService(email, password)
        .then(response => {
          console.log(response);
          const { token, refreshToken, user } = response.data;
          console.log({ token, refreshToken, user });
          this.setUserStore(user);
          tokenService.save(token);
          tokenService.saveRefresh(refreshToken);

          this.$router.push({ name: "Dashboard" });
        })
        .catch(err => {
          console.log(err);
          alert("Authentication Failed");
        });
    }
  }
};
