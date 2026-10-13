import { TavilySearch } from "@langchain/tavily";
import { MCPAdapter } from "@langchain/mcp-adapters";

export const tavily = new TavilySearch({
    tavilyApiKey: process.env.API_TAVILY
})

export const mcpN8n = new MCPAdapter({
    servers : {
        n8n : {
            url: process.env.MCP_URL_N8N
        }
    }
})