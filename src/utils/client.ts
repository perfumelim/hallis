import axios from "axios";

const baseURL = "http://localhost:4000/";

const client = axios.create({
  baseURL,
});

export default client;
