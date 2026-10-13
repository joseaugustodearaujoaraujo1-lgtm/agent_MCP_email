import "dotenv/config"
import modelosOpenrouter from "../models/agentOpenrouter.js"
import modeloGroq from "../models/agentGroq.js"
import { createAgent, modelFallbackMiddleware } from "langchain"
import { promptAgentEmail } from "../prompts/allPrompts.js"
import {   mcpN8n, tavily } from "../tools/allTools.js"

export const agentEditor = createAgent({
    model: modelosOpenrouter,
    systemPrompt: promptAgentEmail,
    middleware : [
        modelFallbackMiddleware(modeloGroq)
    ],
    tools : [
        tavily,
        ...await mcpN8n.listTools()
    ]
})