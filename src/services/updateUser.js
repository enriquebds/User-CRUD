import database from "../database/users";

const updateUser = async (id, name, email) => {
  try {
    const res = await database.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *;",
      [name, email, id]
    );

    if (res.rowCount === 0) {
      throw new Error("User not found");
    }

    return { message: "User updated", user: res.rows[0] };
  } catch (error) {
    throw new Error(error);
  }
};

export default updateUser;
