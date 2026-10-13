import "dotenv/config"
import express from "express"
import conversa from "./routes/conversa.js"
import { mcpN8n } from "./IA/tools/allTools.js"

const porta = 3001
const app = express()

app.use(express.json())
app.use("" , conversa)

app.use((err , req , res, next) => {res.status(err.status || 500).json({Resposta : err.message || "Erro interno no servidor!"})})
app.use((req , res, next) => {res.status(404).json({Resposta : "Rota não encontrada, verifique o endpoint!"})})

app.listen( porta , () => {
    console.log("http://localhost:" + porta)
})