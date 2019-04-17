import { Api } from "../_helpers/service";

export const LoginApi = {
  login: (login, password) => Api.post("/login")
};
