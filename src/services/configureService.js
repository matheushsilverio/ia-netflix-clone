import http from "@/services/http.js";

export default class ConfigureService {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.api = http;
  }

  get() {
    return this.api.get(this.endpoint);
  }

  getById(id) {
    return this.api.get(`${this.endpoint}/${id}`);
  }

  update(id, value) {
    return this.api.put(`${this.endpoint}/${id}`, value);
  }

  delete(id) {
    return this.api.delete(`${this.endpoint}/${id}`);
  }

  create(value) {
    return this.api.post(this.endpoint, value);
  }
}
