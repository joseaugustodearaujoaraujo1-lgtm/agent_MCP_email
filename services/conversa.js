import { agentEditor } from "../IA/agents/agentEditor.js"

export async function AgentBasico(pergunta , historico){
    try {
        const resposta = await agentEditor.invoke({
            messages: [
                ...historico,
                {
                    role: "user" , content: pergunta
                }
            ]
        })

        return {RespostaAgentEditor : resposta.messages.at(-1).content}
    } catch (error) {
        throw error
    }
}