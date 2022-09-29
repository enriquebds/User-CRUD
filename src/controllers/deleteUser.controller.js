import deleteUser from "../services/deleteUser";

const deleteUserController = (req, res) => {
  const { uuid } = req.params;

  const deletedUser = deleteUser(uuid);

  return res.json(deletedUser);
};

export default deleteUserController;
