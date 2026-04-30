import express from "express";
import { PrismaClient } from "../generated/prisma/index.js";
import cors from "cors";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/tarefa", async (req, resp) => {
  await prisma.tarefas.create({
    data: {
      tarefa: req.body.tarefa,
      concluida: req.body.concluida,
    },
  });

  resp.status(201).send("post rodando");
});

app.get("/tarefa", async (req, resp) => {
  const tasks = await prisma.tarefas.findMany();
  resp.send(tasks);
});

app.put("/tarefa/:id", async (req, resp) => {
  await prisma.tarefas.update({
    where: {
      id: req.params.id,
    },

    data: {
      tarefa: req.body.tarefa,
      concluida: req.body.concluida,
    },
  });
});

app.delete("/tarefa/:id", async (req, resp) => {
  await prisma.tarefas.delete({
    where: {
      id: req.params.id,
    },
  });

  resp.send("tarefa deletada!");
});

app.listen(3000, () => {
  console.log("Servidor iniciado & Rodado!");
});
