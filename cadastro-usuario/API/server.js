import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

const App = express();
App.use(express.json());

App.post("/usuarios", async (req, resp) => {

  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      idade: req.body.idade,
    },
  });

  resp.status(201).json(req.body);
});

App.put('/usuarios/:id', async (req, resp) => {
    await prisma.user.update({
        where: {
            id: req.params.id
        },

        data: {
            email: req.body.email,
            name: req.body.name,
            idade: req.body.idade,
        },
    })

    resp.status(201).json(req.body)
})

App.delete('/usuarios/:id', async (req, resp) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    resp.status(200).json({message: 'usuario deletado com sucesso!'})
})

App.get("/usuarios", async (req, resp) => {

    let users = []

    if (req.query) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                idade: req.query.idade ? Number(req.query.idade) : undefined
            }
        })
    } else {
        await prisma.user.findMany()
    }
   resp.status(200).json(users)

});

App.listen(3333);
