import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:3001/api/v1/user/profile";

// service for edit User's Profile request by the axios

const putProfile = (firstName, lastName) => {
    return axios.put(API_URL, {
        "firstName": firstName,
        "lastName": lastName
    }, {headers: authHeader()}
    ).then((response) => {
        return response.data;
    });
    };
const editService = {
    putProfile,
};
export default editService