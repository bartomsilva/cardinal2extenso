import express, { Request, Response } from "express"
import cors from "cors"
import { convertValue } from "./business/convertValue"

const PORT = process.env.PORT || 5000

const server = express()
server.use(express.json())
server.use(cors())

server.listen(PORT, () => console.log("server on in port", PORT))

server.get("/", (req: Request, res: Response) => {
  try {
    res.send("decimal2extenso online.")

  } catch (error) {
    res.send(error)
  }
})

// converte os valoes
server.get("/:number", (convertValue))




