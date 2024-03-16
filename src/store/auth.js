import axios from "axios";
import { effectScope, reactive } from "vue";
import router from "../Router/router";

const auth = reactive({
  isAuthinticate: false,
  users: localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : [],
  user: "",
  error: "",
  async login(e, p) {
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username: e,
          password: p,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      this.user = response.data.token;
      this.users = response.data;
      this.error = "";
      localStorage.setItem("auth", JSON.stringify(this.users));
      this.isAuthenticate = true;
    } catch (error) {
      this.error = "Invalid username or password";
    }
  },

  logout() {
    this.users = "";
    this.isAuthenticate = false;
    localStorage.removeItem("auth");
    router.push("/login");
  },
});

export default auth;
