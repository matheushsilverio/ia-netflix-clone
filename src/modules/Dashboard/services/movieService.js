import ConfigureService from "@/services/configureService.js";

export default class MovieService extends ConfigureService {
  constructor() {
    super("movies");
  }

  getByCategory(category) {
    return this.api.get(`${this.endpoint}/categories/${category}`);
  }
}
