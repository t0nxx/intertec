import Axios from "axios";

const httpClient = Axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  /// we can add global config here like auth header ... etc , just make
});

httpClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // error logic here
    Promise.reject(error);
  }
);

export default httpClient;
