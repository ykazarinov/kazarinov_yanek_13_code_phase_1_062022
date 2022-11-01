import axios from "axios";
const API_URL = "https://argentbank-server.herokuapp.com/api/v1/user/login";

// services for login and logout request by the axios

const login = (email, password) => {
  return axios
    .post(API_URL, {
        email,
        password,
    })
    .then((response) => {
      if (response.data.body.token) {
        localStorage.setItem("token", JSON.stringify(response.data.body.token));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("rememberMe");
 
};
const authService = {
  login,
  logout,
};
export default authService;