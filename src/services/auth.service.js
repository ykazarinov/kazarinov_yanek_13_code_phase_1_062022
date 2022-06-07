import axios from "axios";
const API_URL = "http://localhost:3001/api/v1/user/login";

// const register = (username, email, password) => {
//   return axios.post(API_URL + "signup", {
//     username,
//     email,
//     password,
//   });
// };
const login = (email, password) => {
  return axios
    .post(API_URL, {
        email,
        password,
    })
    .then((response) => {
        
      if (response.data.token) {
        localStorage.setItem("email", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("email");
};
const authService = {
//   register,
  login,
  logout,
};
export default authService;