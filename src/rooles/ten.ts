import { tTen } from "../constants/constants";
import { unit } from "./unit";

export function ten(value:string):string{
  
  let newValue:number = parseInt(value)
  
  const firstNumber: string = value[0]
  const secondNumber: string = value[1]

  if(firstNumber==='1'){ // 10 to 19
    return tTen[newValue]
  } else { // 20 to 99
    if(value[1]=="0"){ // 20, 30... 90
      return tTen[newValue]
    } else { // 21, 22, 23 ....99
      const second = unit(secondNumber)
      newValue = parseInt(firstNumber+'0')
      return tTen[newValue]+' e '+second
    }
  }
}