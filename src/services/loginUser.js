import * as bcrypt from "bcryptjs";
import users from "../database/users";
import jwt from "jsonwebtoken";

const loginUser = (email, password) => {
  const loginUser = users.find((user) => user.email === email);
  const verifyPassword = bcrypt.compareSync(password, loginUser.password);

  if (!loginUser) {
    throw new Error("Invalid email or password");
  }

  if (!verifyPassword) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign({ email: email }, "SECRET_KEY", {
    expiresIn: "24h",
    subject: loginUser.uuid,
  });

  return { token: token };
};

export default loginUser;
