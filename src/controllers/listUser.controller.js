import users from "../database/users";
import listUsers from "../services/listUsers";

const listUsersController = async (req, res) => {
  try {
    const user = await listUsers(users);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default listUsersController;
