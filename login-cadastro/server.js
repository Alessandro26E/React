import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

const App = express();
App.use(express.json());

App.post("/cadastro", async (req, resp) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      idade: req.body.idade,
    },
  });

  resp.status(201).json(req.body);
});

App.listen(3000);
