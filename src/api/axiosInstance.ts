import axios from "axios";

const url = process.env.VITE_EXCHANGE_APP_CURRENCY_LATEST_LINK;

const instance = axios.create({
  baseURL: url,
  timeout: 100,
});

export default instance;
