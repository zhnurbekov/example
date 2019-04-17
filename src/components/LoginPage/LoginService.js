import { Api } from "../../_helpers/service";

const LoginService = {
  login: (login, password) => Api.post("/login")
};

export default LoginService;
