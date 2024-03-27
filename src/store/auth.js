import Axios from "axios";
import { reactive, ref } from "vue";

const Auth = reactive({
  users: {},
  authToken: localStorage.getItem("authToken")
    ? JSON.parse(localStorage.getItem("authToken"))
    : null,
  isAuth: localStorage.getItem("isAuth")
    ? JSON.parse(localStorage.getItem("isAuth"))
    : false,
  success: "",
  error: "",
  baseURL: "http://127.0.0.1:8000/api/",
  async register(name, email, password) {
    let response = await Axios.post(this.baseURL + "customer/register", {
      fname: name,
      email: email,
      password: password,
    });
    if (response.data.success) {
      this.success = response.data.success;
    } else {
      this.error = response.data[0];
    }
  },
  // register off
  async login(email, password) {
    let response = await Axios.post(this.baseURL + "customer/login", {
      email: email,
      password: password,
    });
    if (response.data.success) {
      this.success = response.data.success;
      this.authToken = response.data.token;
      this.isAuth = true;
      localStorage.setItem("authToken", JSON.stringify(this.authToken));
      localStorage.setItem("isAuth", JSON.stringify(this.isAuth));
    } else {
      this.error = response.data.Error;
      console.log(this.error);
    }
    this.getUser();
  },
  async getUser() {
    let response = await Axios.get(this.baseURL + "user", {
      headers: {
        Authorization: `Bearer ${this.authToken}`,
      },
    });
    this.users = response.data;
  },
  async logout() {
    this.users = {};
    this.authToken = null;
    this.isAuth = false;
    localStorage.removeItem("authToken");
    localStorage.removeItem("isAuth");
  },
});

Auth.getUser();
export default Auth;
