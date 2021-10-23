import cookieService from "./cookieService";

export const TOKEN_KEY = process.env.VUE_APP_TOKEN_KEY;

export default {
  get() {
    return cookieService.getCookie(TOKEN_KEY);
  },
  save(token) {
    return cookieService.setCookie(TOKEN_KEY, token);
  },
  remove() {
    cookieService.removeCookie(TOKEN_KEY);
  },
};
