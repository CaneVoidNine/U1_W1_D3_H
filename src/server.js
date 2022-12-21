import express from "express";
import usersRouter from "./api/users/index.js";
const server = express();

const port = 3001;

server.use(express.json());

server.use("/users", usersRouter);

server.listen(port, () => {
  console.log(`Server is running: ${port}`);
});
