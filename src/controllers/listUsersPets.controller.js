import listUserPets from "../services/listUsersPets";

const listUsersPetsController = async (req, res) => {
  const { ownder_id } = req.params;

  try {
    const pets = await listUserPets(ownder_id);

    return res.json(pets);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export default listUsersPetsController;
