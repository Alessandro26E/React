import express from "express";
import  cors  from "cors";
import { PrismaClient } from "../generated/prisma/client.js";
import jwt from 'jsonwebtoken'

import 'dotenv'

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/usuarios", async (req, resp) => {
  const allUsers = await prisma.cadastrados.findMany();

  resp.send(allUsers);
});


app.post("/usuarios", async (req, resp) => {
  await prisma.cadastrados.create({
    data: {
      email: req.body.email,
      password: req.body.password,
    },
  });
  
  const allUsers = await prisma.cadastrados.findMany()
  
  
  resp.send("usuario cadastrado");
});

app.listen(3000, () => {
  console.log("servidor rodando!");
});
