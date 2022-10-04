import database from "../database/users";
import * as bcrypt from "bcryptjs";

const createUser = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const res = await database.query(
      `INSERT INTO 
      users(name, email, password) 
      VALUES
      ($1, $2, $3)
      RETURNING *
      `,
      [name, email, hashedPassword]
    );

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default createUser;
