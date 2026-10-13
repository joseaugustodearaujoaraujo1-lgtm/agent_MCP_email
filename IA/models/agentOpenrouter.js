import "dotenv/config"
import { ChatOpenRouter } from "@langchain/openrouter"

const modelosOpenrouter = new ChatOpenRouter({
    model: process.env.OPENROUTER_MODELO_1,
    temperature: 0.5,
    apiKey: process.env.API_OPENROUTER,
    models : [
        process.env.OPENROUTER_MODELO_2,
        process.env.OPENROUTER_MODELO_3,
        process.env.OPENROUTER_MODELO_4
    ],
    route: "fallback"
})

export default modelosOpenrouter

