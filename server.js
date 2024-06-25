import express from "express"
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

//permite express ler formato json
app.use(express.json())

// username: jeremiasverissimo19
// password: z8AHfxIMTXNkyTLC

const users = []

app.post("/usuarios", async (req,res)=>{
    // console.log(req)

    await prisma.user.create({
        data:{
            name: req.body.name,
            email: req.body.email, 
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
    
})
// Variável nas rotas procede ":"
// Antes pegávamos os dados pelo Body, agora será pelo Params
app.put("/usuarios/:id", async(req,res)=>{
    await prisma.user.update({
        where:{
            id: req.params.id
        },
        data:{
            name: req.body.name,
            email: req.body.email, 
            age: req.body.age
        }
    })
})

app.get("/usuarios", async (req,res)=>{

    const users = await prisma.user.findMany()
    res.status(200).json(users)
})

app.listen(9001, ()=>{
    console.log("Servidor inicializado")
})