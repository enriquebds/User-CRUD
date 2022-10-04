import * as bcrypt from "bcryptjs";
import database from "../database/users";
import jwt from "jsonwebtoken";

const loginUser = async (email, password) => {
  try {
    const res = await database.query(`SELECT * FROM users WHERE email = $1`, [
      email,
    ]);

    if (res.rows.length === 0) {
      throw new Error("Invalid email or password");
    }

    const user = res.rows[0];

    const verifyPassword = bcrypt.compareSync(password, user.password);

    if (!verifyPassword) {
      throw new Error("Invalid email or password");
    }

    const token = jwt.sign({ email: email }, "SECRET_KEY", {
      expiresIn: "24h",
      subject: user.id,
    });

    return { token: token };
  } catch (error) {
    throw new Error(error);
  }
};

export default loginUser;
