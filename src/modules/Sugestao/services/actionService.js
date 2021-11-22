import ConfigureService from "@/services/configureService.js";

const url = `Action`;

export default {
  get() {
    return ConfigureService.get(`/movies/${url}`);
  }
};
