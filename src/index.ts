import express, {Request, Response} from "express"
import cors  from "cors"
import { unit } from "./rooles/unit"
import { ten } from "./rooles/ten"
import { hundred } from "./rooles/hundred"
import { thousand } from "./rooles/thousand"

const PORT = process.env.PORT  || 5000

const server = express()
server.use(express.json())
server.use(cors())

server.listen(PORT, ()=>console.log("server on in port",PORT))

server.get("/:number",(req:Request, res:Response)=>{
  try {
    
    const cNumber:string = req.params.number
    
    // unit / unidades
    if(cNumber.length===1){
      res.json(unit(cNumber))
    }
    
    // ten / dezenas
    if(cNumber.length===2){
      res.json(ten(cNumber))
    }

    // hundred / centenas
    if(cNumber.length===3){
      res.json(hundred(cNumber))
    }

    if(cNumber.length>=4 && cNumber.length <=6){
      res.json(thousand(cNumber))
    }
    
  } catch (error) {
    res.send(error)
  }
  
})