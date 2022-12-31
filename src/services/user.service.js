import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://suspicious-franklin.82-165-57-61.plesk.page/api/v1/user/profile";

// service for get User's Profile request by the axios

const getUserBoard = () => {
  return axios({
    method: 'post',
    url: API_URL,
    headers: authHeader()
  })
 };
const userService = {
  getUserBoard,
 
};
export default userService