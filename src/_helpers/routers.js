import Roles from "./Roles";

const routers = [
  {
    path: "/login",
    text: 'Авторизация',
    component: undefined,
    withoutAuth: true,
    role: [Roles.ADMIN],
    withHeader: false,
    exact: true
  }
];

export default routers;
