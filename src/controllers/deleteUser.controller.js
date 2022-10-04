import deleteUser from "../services/deleteUser";

const deleteUserController = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await deleteUser(id);

    return res.json(deletedUser);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export default deleteUserController;
