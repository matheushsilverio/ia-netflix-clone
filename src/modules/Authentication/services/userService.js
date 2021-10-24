import ConfigureService from "@/services/configureService.js";

export default class UserService extends ConfigureService {
  constructor() {
    super("users");
  }
}
