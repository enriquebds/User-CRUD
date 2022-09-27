import users from "../database/users";
import listUsers from "../services/listUsers";

const listUsersController = (req, res) => {
  const user = listUsers(users);

  return res.status(200).json(user);
};

export default listUsersController;
