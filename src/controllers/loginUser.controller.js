import loginUser from "../services/loginUser";

const loginUserController = (req, res) => {
  const { email, password } = req.body;

  const login = loginUser(email, password);

  return res.status(200).json(login);
};

export default loginUserController;
