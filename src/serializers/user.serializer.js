import * as yup from "yup";

const createUserSerializer = yup.object().shape({
  uuid: yup.string().notRequired(),
  createdOn: yup.string().notRequired(),
  updatedOn: yup.string().notRequired(),
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup.string().required(),
});

export { createUserSerializer };
