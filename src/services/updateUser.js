import users from "../database/users";

const updateUser = (uuid, name, email) => {
  const findUser = users.find((elem) => elem.uuid === uuid);

  const updatedUser = {
    uuid,
    createdOn: findUser.createdOn,
    updatedOn: new Date(),
    name,
    email,
    isAdm: findUser.isAdm,
  };

  const userIndex = users.findIndex((elem) => elem.uuid === uuid);

  if (userIndex === -1) {
    return "User not found";
  }

  users[userIndex] = { ...users[userIndex], ...updatedUser };
  return updatedUser;
};

export default updateUser;
