import createPet from "../services/createPet";

const createPetController = async (req, res) => {
  const { ownder_id } = req.params;
  const { name, species, breed } = req.body;

  try {
    const pet = await createPet(name, species, breed, ownder_id);

    return res.status(201).json(pet);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export default createPetController;
