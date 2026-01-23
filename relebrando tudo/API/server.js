import express from 'express'
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express()
app.use(express.json())


app.get('/usuarios',async (req, resp) => {

    const allUsers = await prisma.user.findMany()
    resp.send(users)
})

app.post('/usuarios',async (req, resp) => {

    const user = await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    })

    console.log('Created user:', user)
    resp.send('ok post')
})


app.listen(3000)

/*4XtEk87MDNVHxKKF*/