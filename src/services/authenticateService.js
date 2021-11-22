import axios from "axios";

const BASE_URL = `${process.env.VUE_APP_ENDPOINT}authenticate`;
console.log(BASE_URL);

export default async (username, password) => {
  return axios({
    method: "POST",
    url: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": process.env.VUE_APP_API_URL
    },
    auth: {
      username,
      password
    }
  });
};
