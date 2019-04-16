import Role from "../_constants/Role";

const routers = [
  {
    path: "/login",
    ru_name: 'Авторизация',
    kk_name: 'Авторизация',
    en_name: 'Authorization',
    component: undefined,
    withoutAuth: false,
    role: [Role.ADMIN],
    withHeader: false,
    exact: true
  }
];

export default routers;
