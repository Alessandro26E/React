import express from 'express'
import cors from 'cors'
import { PrismaClient } from "../generated/prisma/client.js";
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient();

const app = express()
app.use(express.json())
app.use(cors())

const {SECRET_TOKEN_KEY} = process.env

app.post('/cadastro',async (req, resp) => {
    const {email, password} = req.body

    await prisma.cadastrados.create({
        data: {
            email: email,
            password: password
        }
    })
    
    const token = jwt.sign({email: email}, SECRET_TOKEN_KEY, {
        expiresIn: '10m'
    })


    resp.json({token})
})

app.post('/autoLogin',async (req, resp) => {
    console.log(req)
    const authHeader =  req.headers['authorization']
    const {token} = req.body

    if (!token) {
        return resp.status(403).json({message: 'Não Autorizado, FALTA TOKEN!'})
    }

    console.log('Token encontrado! prosseguindo,')

    jwt.verify(token, SECRET_TOKEN_KEY, async (err, token) => {

        if (err) {         
            return  resp.status(403).json({message: 'Token Expirado!'})
        }

        
        resp.status(201).json({message: token.email})
    })
})

app.get('/cadastro',async (req, resp) => {
    const {email, password} = req.body
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1] /*Se authHeader existir, pega a segunda parte dele. Se não existir, retorna 'undefined' "*/

    if (!token) {
        return resp.status(403).json({message: 'Não Autorizado, FALTA TOKEN!'})
    }

    jwt.verify(token, SECRET_TOKEN_KEY, async (err, email) => {
        if (err) {
            return resp.status(403).json({message: 'Token expirado, Não Autorizado'})
        }
        
        const allUsers = await prisma.cadastrados.findMany()

        resp.json({
            message: 'Acesso Autorizado',
            users: allUsers
        })

    })

})

app.get('/usuarios',async (req, resp) => {
    const allUsers = await prisma.cadastrados.findMany()

    resp.send(allUsers)
})

app.post('/login',async (req, resp) => {
    const {email, password} = req.body

    const usuario = await prisma.cadastrados.findUnique({
        where: {email: email}
    })

    if (!usuario) {
        return resp.status(401).json({error: 'Usuario nao encontrado'})
    }

    const senhaValida = password === usuario.password

    if (!senhaValida) {
        return resp.status(401).json({error: 'Senha Incorreta'})
    }

    const token = jwt.sign({email: usuario.email}, SECRET_TOKEN_KEY, {
        expiresIn: '10m'
    })

    resp.json(token)
})

app.listen(3000, () => {
    console.log("servidor rodando!")
})
