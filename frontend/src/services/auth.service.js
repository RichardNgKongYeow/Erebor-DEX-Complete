// To set up for the use of Axios for HTTP requests and Local Storage 
// for user information & JWT.
// This will provide methods for:
//    login(): POST {username, password} & save JWT to Local Storage
//    logout(): remove JWT from Local Storage
//    signup(): POST {username, email, password}
//    getCurrentUser(): get stored user information (including JWT)

import axios from "axios";

const API_URL = "http://localhost:3000/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  signup(username, firstname, lastname, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      firstname,
      lastname,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
