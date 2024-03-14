import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

export const UserApiClient = axios.create({
  baseURL: import.meta.env.VITE_USER_SERVICE_BASE_URL,
  headers,
});

export const CatalougeApiClient = axios.create({
  baseURL: import.meta.env.VITE_CATALOUGE_SERVICE_BASE_URL,
  headers,
});

export const CartApiClient = axios.create({
  baseURL: import.meta.env.VITE_CART_SERVICE_BASE_URL,
  headers,
});
