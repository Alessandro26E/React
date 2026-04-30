import express from 'express'
import { PrismaClient } from "../generated/prisma/index.js";
import cors from 'cors'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

app.get('/tasks',async (req, resp) => {
   const allTasks = await prisma.tarefas.findMany()
    resp.status(202).send(allTasks)
})

app.post('/tasks',async (req, resp) => {
    await prisma.tarefas.create({
        data: {
            email: req.body.email,
            tarefa: req.body.tarefa
        }
    })

    resp.send(req.body)
})

app.put('/tasks/:id',async (req, resp) => {
    await prisma.tarefas.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            tarefa: req.body.tarefa 
        }
    })

    resp.send(`tarefa do usuario ${req.body.email} Atualizada!`)
})

app.delete('/tasks/:id',async (req, resp) => {
    await prisma.tarefas.delete({
        where: {
            id: req.params.id
        }
    })

    const user = await prisma.tarefas.findUnique({
       where: {
            id: req.params.id
        }
    })
    resp.send('usuario: ' + user + " Deletado com sucesso!")
})

app.listen(3000,() => console.log("Servidor Rodando!"))
