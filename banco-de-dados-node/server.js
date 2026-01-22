import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

const App = express();
App.use(express.json());

const users = [];

App.post("/usuarios", async (req, resp) => {
  await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age ? Number(req.body.age) : undefined,
    },
  });

  resp.status(201).send("ok, postei");
});

App.get("/usuarios", async (req, resp) => {
  let allUsers = [];

  if (req.query) {
    allUsers = await prisma.user.findMany({
      where: {
        name: req.query.name,
        email: req.query.email,
        age: req.query.age ? Number(req.query.age) : undefined,
      },
    });
  } else {
    allUsers = await prisma.user.findMany();
  }

  resp.status(200).json(allUsers);
});

App.put("/usuarios/:id", async (req, resp) => {
  await prisma.user.update({
    where: {
      id: req.params.id,
    },

    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    },
  });

  resp.send(req.body);
});

App.delete("/usuarios/:id", async (req, resp) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });
  resp
    .status(200)
    .json({ message: `Usuario: ${req.body.name} Deletado com sucesso!` });
});

App.listen(3000);
