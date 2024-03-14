import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

const apiClient = axios.create({
  baseURL: "https://example.com/api",
  headers,
});

export const UserApiClient = axios.create({
  baseURL: import.meta.env.VITE_USER_SERVICE_BASE_URL,
  headers,
});

// apiClient.interceptors.request.use((config) => {
//   const token = sessionStorage.getItem('authToken');
//   if (token) {
//     config.headers['Authorization'] = `Bearer ${token}`;
//   }
//   return config;
// });

export default apiClient;
