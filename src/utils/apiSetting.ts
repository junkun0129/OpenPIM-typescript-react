import axios from "axios";


export const apiBaseUrl = "your backend host";
export const apiRoutes = {
  login: "/login",
  user: "/user",
  logout: "logout",
};

export const apiAxios = axios.create({
  baseURL: apiBaseUrl,
});

apiAxios.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // console.log(error);
    if (error.response.status == 401) {
      console.log("Unauthorized");
    } else if (error.response.status == 403) {
      console.log("Forbidden");
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
