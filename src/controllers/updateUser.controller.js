import updateUser from "../services/updateUser";

const updatedUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const updatedUser = await updateUser(id, name, email);

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export default updatedUserController;
