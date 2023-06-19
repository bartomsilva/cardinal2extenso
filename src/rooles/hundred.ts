import { tValue } from "../constants/constants";
import { unit } from "./unit";
import { ten } from "./ten";

export function hundred(value: string): string {

  let newValue: number = parseInt(value)
  let result = ""

  const firstNumber: string = value[0]
  const secondNumber: string = value[1]
  const thirdNumber: string = value[2]

  // obs: quanto ao 100 (cem assume cento quando é composto )
  if (firstNumber=='1' && value.includes('00')) {
    return "cem"
  }

  // pega o base das centenas
  result = tValue[parseInt(firstNumber + '00')] + ' e '
  newValue = parseInt(secondNumber + thirdNumber)
 
  if (newValue < 10) {
    result += unit(secondNumber + thirdNumber)
  } else {
    result += ten(secondNumber + thirdNumber)
  }
  return result
}