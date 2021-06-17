import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/fir-8b5d1/us-central1/api",
  // the api cloud funtion URL
});

export default instance;

