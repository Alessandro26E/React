import express from "express";
import { PrismaClient }  from './generated/prisma/index.js'
import cors from 'cors'
const prisma = new PrismaClient()

const app = express();
app.use(express.json());
app.use(cors('http://localhost:5173'))

app.post("/usuarios", async (req, resp) => {

  await prisma.user.create({
    data: {
        name: req.body.name,
        idade: req.body.idade,
        email: req.body.email
    }
  })

  resp.status(201).json(req.body);
});

app.get("/usuarios",async (req, resp) => {
    let usuarios = []

    if (req.query) {
        usuarios = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                idade: req.query.idade ? Number(req.query.idade) : undefined
            }
        })
    } else {
        usuarios = await prisma.user.findMany()
    }
    

  resp.status(200).json(usuarios);
});

app.put('/usuarios/:id', async (req, resp) => {
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            idade: req.body.idade,
            email: req.body.email
        }
    })

    resp.send(201).json(req.body)
})

app.delete('/usuarios/:id', async (req, resp) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    resp.status(200).json({message: "usuario deletado com sucesso"})
})
app.listen(3000);

/*
    PASSWORD MONGODB: iURprsEpW1ItGnCm
*/
