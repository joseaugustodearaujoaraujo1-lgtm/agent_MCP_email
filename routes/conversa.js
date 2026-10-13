import { Router } from "express"
import * as controlller from "../controller/conversa.js"

const route = Router()

route.post("/conversa" , controlller.ControllerAgentEditor)

export default route