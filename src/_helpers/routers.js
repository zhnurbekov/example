import Roles from "./Roles";
import LoginPage from "../LoginPage/LoginPage";
import Test from "../LoginPage/Test";

const routers = [

  {
    path: "/",
    text: 'Авторизация',
    component: LoginPage,
    withoutAuth: true,
    role: [Roles.ADMIN],
    withHeader: false, // для примера
    exact: true
  },
  {
    path: "/login",
    text: 'Авторизация',
    component: LoginPage,
    withoutAuth: true,
    role: [Roles.ADMIN],
    withHeader: false, // для примера
    exact: true
  },

  {
    path: "/menu",
    text: 'Авторизация',
    component: Test,
    withoutAuth: true,
    role: [Roles.ADMIN],
    withHeader: false, // для примера
    exact: true
  }
];

export default routers;
