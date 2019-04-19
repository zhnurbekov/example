import LoginPage from "../LoginPage/LoginPage";
import Test from "../LoginPage/Test";
import HomePage from "../HomePage/HomePage";

/*
{
  path: "/menu",
  text: 'Авторизация',
  component: Test,
  withoutAuth: true,
  role: [Roles.ADMIN],
  withHeader: false
  exact: true
}
*/

const routers = [
  {
    path: "/",
    text: "Главная",
    component: HomePage,
    exact: true
  },
  {
    path: "/login",
    text: "Авторизация",
    component: LoginPage,
    withoutAuth: true,
    exact: true
  },

  {
    path: "/menu",
    text: "Меню",
    withoutAuth: true,
    component: Test,
    exact: true
  }
];

export default routers;
