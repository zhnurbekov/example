import * as yup from 'yup';

/*
export const loginValidate = object().shape({
  bidType: string().required("Обязательное поле для заполнения"),
  serviceType: string().required("Обязательное поле для заполнения")
});
*/


export const loginValidate = yup.object().shape({
  login: yup.string().required("Обязательное поле для заполнения"),
  password: yup.string().required("Обязательное поле для заполнения")
});
