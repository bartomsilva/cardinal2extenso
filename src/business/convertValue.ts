import  { Request, Response } from 'express'
import { checkValues } from './checkvalues'
import { mergeText } from './mergeText'

export function convertValue(req: Request, res: Response) {
  try {

    const vMax = 999999999
    const cNumber: string = req.params.number
    const convNumber: string = cNumber.padStart(9, '0')

    const million = convNumber.slice(0, 3)
    const thousand = convNumber.slice(3, 6)
    const undHundred = convNumber.slice(6, 11)

    let result: string = ""

    // ============= validações ============
    if (isNaN(parseInt(cNumber)) || parseInt(cNumber) > vMax) {
      res.status(400)
      throw new Error(`você forneceu um valor inválido (valor máximo =)${vMax}).`)
    }

    if (!/^[0-9]+$/.test(cNumber)) {
      res.status(400)
      throw new Error(`valor contém elementos inválidos.`)
    }
    //=======================================

    // selecionar os valores
    const textMillion = checkValues(million)
    const textThosand = checkValues(thousand)
    const textHundred = checkValues(undHundred)

    // juntar as partes e inserir o texto de classe de valores
    result = mergeText(result, textMillion, textThosand, textHundred)

    // correção ortográfica ( cento e mil )

    //================================

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
}