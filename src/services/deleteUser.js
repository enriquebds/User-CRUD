import users from "../database/users";

const deleteUser = () => {
  const userIndex = users.findIndex((elem) => elem.uuid === uuid);

  if (userIndex === -1) {
    return { message: "User not found" };
  }

  users.splice(userIndex, 1);

  return { message: "User deleted with success" };
};

export default deleteUser;
