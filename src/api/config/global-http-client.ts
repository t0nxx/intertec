import Axios from "axios";

const httpClient = Axios.create({
  // baseURL: process.env.REACT_APP_API_ENDPOINT,
  baseURL: "http://10.2.48.23:81/api",
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

// response data object is shaped like this from the backend
// {
//   message: "fail"
//   errors: [{…}]
//   code: 606
//   Data: null
// }

export default httpClient;
