import loginUser from "../services/loginUser";

const loginUserController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const login = await loginUser(email, password);

    return res.status(200).json(login);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default loginUserController;
