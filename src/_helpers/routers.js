import Roles from "./Roles";
import LoginPage from "../LoginPage/LoginPage";

const routers = [
  {
    path: "/login",
    text: 'Авторизация',
    component: LoginPage,
    withoutAuth: true,
    role: [Roles.ADMIN],
    withHeader: false, // для примера
    exact: true
  }
];

export default routers;
