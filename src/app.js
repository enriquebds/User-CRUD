import express from "express";
import userRoutes from "./routes/user.routes";
import loginRoutes from "./routes/login.routes";
import petsRouter from "./routes/pets.routes";
import { startDatabase } from "./database/users";

const app = express();
app.use(express.json());
app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use("/pets", petsRouter);

app.listen(3000, () => {
  startDatabase();
});
