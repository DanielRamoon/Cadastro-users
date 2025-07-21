import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:8182",
});

export default Api;
