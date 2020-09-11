import axios from "axios";

const instance = axios.create({
  baseURL: "https://pancakex-9a813.firebaseio.com/",
});

export default instance;
