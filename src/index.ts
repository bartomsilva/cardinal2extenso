import express, {Request, Response} from "express"
import cors  from "cors"
import { checkValues } from "./business/checkvalues"

const PORT = process.env.PORT  || 5000

const server = express()
server.use(express.json())
server.use(cors())

server.listen(PORT, ()=>console.log("server on in port",PORT))

server.get("/",(req:Request, res:Response)=>{
  try {
    res.send("no final digite uma / e informe um valor para converter em extenso.")
    
  } catch (error) {
    res.send(error)
  }
  
})
server.get("/:number",(req:Request, res:Response)=>{
  try {
    const vMax = 999999
    
    const cNumber:string = req.params.number
    if(isNaN(parseInt(cNumber)) || parseInt(cNumber)>vMax) {
      res.statusCode=400
      throw new Error(`você forneceu um valor inválido (valor máximo =)${vMax})`)
    }
    const convNumber:string = cNumber.padStart(9,'0')

    const milhar = convNumber.slice(0,3)
    const mil    = convNumber.slice(3,6)
    const und    = convNumber.slice(6,11)

    const r1 = checkValues(milhar)
    const r2 = checkValues(mil)
    const r3 = checkValues(und)

    let result:string = ""
    if( r1 ){
      result = r1      
    }

    if( r2 ){ // mil
      result += r2.replace('um',"") 
      
      if(!r3){
        result += 'mil'
      }
    }
    if( r3 ){ // unid
      if ( r2.length > 0 ) {
        result += ' mil '
        if (!r3.includes("centos")){
          result += ' e '
        }
      }
      result += r3 
    }
    res.json(result.trim())
    
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