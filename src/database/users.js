import { Client } from "pg";

const database = new Client({
  user: "enriquebds",
  host: "localhost",
  database: "users_db",
  password: "123",
  port: 5432,
});

export const startDatabase = async () => {
  await database.connect();
};

export default database;
