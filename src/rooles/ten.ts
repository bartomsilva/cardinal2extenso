import { tValue } from "../constants/constants";
import { unit } from "./unit";

export function ten(value:string):string{
  
  let newValue:number = parseInt(value)
  
  const firstNumber: string = value[0]
  const secondNumber: string = value[1]

  if(firstNumber==='1'){ // 10 to 19
    return tValue[newValue]
  } else { // 20 to 99
    if(secondNumber=="0"){ // 20, 30... 90
      return tValue[newValue]
    } else { // 21, 22, 23 ....99
      const second = unit(secondNumber)
      newValue = parseInt(firstNumber+'0')
      return tValue[newValue]+' e '+second
    }
  }
}