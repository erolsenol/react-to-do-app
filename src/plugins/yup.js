import * as yup from "yup";

const validations = yup.object().shape({
  email: yup.string().email("Geçerli Bir Email giriniz").required(),
  password: yup.string().min(5, "Parola en az 5 karakter olmalıdır").required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Parolalar uyuşmuyor")
    .required(),
});

export default validations;
