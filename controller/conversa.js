import * as service from "../services/conversa.js"

const historicoContexto = []

export async function ControllerAgentEditor(req , res , next){
    try {
        const {pergunta} = req.body

        historicoContexto.push({ role: "user" , content: pergunta})

        

        const {RespostaAgentEditor} = await service.AgentBasico(pergunta , historicoContexto)

        historicoContexto.push({ role: "user" , content: RespostaAgentEditor})
        
        return res.status(200).json({Resposta : RespostaAgentEditor})
    } catch (error) {
        return next(error)
    }
}