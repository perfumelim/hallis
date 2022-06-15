import axios from "axios";

const baseURL = "http://localhost:4000/code";

const client = axios.create({
  baseURL,
});

export default client;
