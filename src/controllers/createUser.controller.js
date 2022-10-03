import createUser from "../services/createUser";

const createUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await createUser(name, email, password);

    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({
      error: error.errors,
    });
  }
};

export default createUserController;
