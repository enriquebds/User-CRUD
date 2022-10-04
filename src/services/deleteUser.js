import database from "../database/users";

const deleteUser = async (id) => {
  try {
    const res = await database.query(
      `DELETE FROM 
      users
      WHERE 
      id = $1 
      RETURNING *;`,
      [id]
    );

    if (res.rowCount === 0) {
      throw new Error("User not found");
    }

    return "User deleted";
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteUser;
