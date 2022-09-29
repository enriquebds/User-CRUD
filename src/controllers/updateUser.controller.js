import updateUser from "../services/updateUser";

const updatedUserController = (req, res) => {
  const { uuid } = req.params;
  const { name, email } = req.body;

  const updatedUser = updateUser(uuid, name, email);

  return res.status(200).json(updatedUser);
};

export default updatedUserController;
