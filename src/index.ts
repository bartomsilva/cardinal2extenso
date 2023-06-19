import express, {Request, Response} from "express"
import cors  from "cors"
import { checkValues } from "./rooles/checkvalues"

const PORT = process.env.PORT  || 5000

const server = express()
server.use(express.json())
server.use(cors())

server.listen(PORT, ()=>console.log("server on in port",PORT))

server.get("/",(req:Request, res:Response)=>{
  try {
    res.send("no final digite uma / e informe um valor entre (0 e 99999) para converter em extenso.")
    
  } catch (error) {
    res.send(error)
  }
  
})
server.get("/:number",(req:Request, res:Response)=>{
  try {
    
    const cNumber:string = req.params.number
    if(isNaN(parseInt(cNumber))) {
      res.statusCode=400
      throw new Error("você forneceu um valor inválido")
    }
    
    const result = checkValues(cNumber)
    res.json(result)
    
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500)
    }
    if (error instanceof Error) {
      res.send(error.message)
    } else {
      res.send("Erro inesperado.")
    }
  }
  
})