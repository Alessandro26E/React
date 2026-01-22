import express from 'express'
import { PrismaClient } from "./generated/prisma/index.js";
import cors from 'cors'

const prisma = new PrismaClient();

const app = express()
app.use(express.json())
app.use(cors())

app.get('/login',async (req, resp) => {

    let users = []

    if (req.query)  {
        users = await prisma.user.findMany({
            where: {
                id: req.query.id,
                email: req.query.email,
                name: req.query.name,
                password: req.query.password
            }
        })
    } else {
        await prisma.user.findMany()
    }

    resp.status(201).json(users)
})

app.post('/login',async (req, resp) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password        
        }
    })
     
    resp.status(201).json(req.body)
})

app.put('/login/:id', async (req, resp) => {
    await prisma.user.update({
        where: {
            id: req.params.id,
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        }
    })

    resp.status(201).json("usuario Atualizado")
})

app.delete('/login/:id', async (req, resp) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    resp.status(200).json('usuario deletado com sucesso!')
})

app.listen(3000)