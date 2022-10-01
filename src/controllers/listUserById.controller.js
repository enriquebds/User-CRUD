import listUserById from "../services/getUserById";

const listUserByIdController = (req, res) => {
  const { uuid } = req.use;

  const user = listUserById(uuid);

  return res.status(200).json(user);
};

export default listUserByIdController;
