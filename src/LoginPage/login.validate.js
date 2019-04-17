import { object, string } from "yup";

export const loginValidate = object().shape({
  bidType: string().required("Обязательное поле для заполнения"),
  serviceType: string().required("Обязательное поле для заполнения")
});
