import express from "express";
import userRoutes from "./routes/user.routes";
import loginRoutes from "./routes/login.routes";

const app = express();
app.use(express.json());
app.use("/user", userRoutes);
app.use("/login", loginRoutes);

app.listen(3000, () => {
  console.log("Listen in port 3000");
});
