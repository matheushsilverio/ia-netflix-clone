import ConfigureService from "@/services/configureService.js";

export default class MovieService extends ConfigureService {
  constructor() {
    super("movies");
  }
}
