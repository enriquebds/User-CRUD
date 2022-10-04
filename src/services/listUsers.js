import database from "../database/users";

const listUsers = async () => {
  try {
    const res = await database.query("SELECT * FROM users");
    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listUsers;
