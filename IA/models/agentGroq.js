import "dotenv/config"
import { ChatGroq } from "@langchain/groq"

const modeloGroq = new ChatGroq({
    model: "openai/gpt-oss-120b",
    temperature: 0.7,
    apiKey: process.env.API_GROQ
})

export default modeloGroq