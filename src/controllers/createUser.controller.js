import createUser from "../services/createUser";

const createUserController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await createUser(name, email, password);

    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default createUserController;
