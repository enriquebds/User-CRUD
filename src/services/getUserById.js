import users from "../database/users";

const listUserById = (uuid) => {
  const user = users.find((elem) => elem.uuid === uuid);

  const newUser = {
    uuid: user.uuid,
    createdOn: user.createdOn,
    updatedOn: user.updatedOn,
    name: user.name,
    email: user.email,
    isAdm: user.isAdm,
  };

  return newUser;
};

export default listUserById;
