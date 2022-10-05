import database from "../database/users";

const listUserPets = async (ownder_id) => {
  try {
    const res = await database.query(
      "SELECT * FROM pets WHERE ownder_id = $1",
      [ownder_id]
    );
    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listUserPets;
