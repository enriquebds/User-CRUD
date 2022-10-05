import database from "../database/users";

const createPet = async (name, species, breed, ownder_id) => {
  try {
    const res = await database.query(
      "INSERT INTO pets(name, species, breed, ownder_id) VALUES($1, $2, $3, $4) RETURNING *",
      [name, species, breed, ownder_id]
    );

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default createPet;
