import { object, string } from "yup";

/*
export const loginValidate = object().shape({
  bidType: string().required("Обязательное поле для заполнения"),
  serviceType: string().required("Обязательное поле для заполнения")
});
*/


export const loginValidate = object().shape({
  login: string().required("Обязательное поле для заполнения"),
  password: string().required("Обязательное поле для заполнения")
});
