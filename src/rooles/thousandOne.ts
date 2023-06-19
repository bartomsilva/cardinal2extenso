import { unit } from "./unit";
import { ten } from "./ten";
import { hundred } from "./hundred";
import { checkValues } from "./checkvalues";
import { tValue } from "../constants/constants";

export function thousand(value: string): string {

  const len: number = value.length

  let newValue: number = 0
  let result = ""

  // separação dos números
  const firstNumber: string = value[0]
  const secondNumber: string = value[1]
  const thirdNumber: string = value[2]
  const fourthNumber: string = value[3]
  const fifthNumber: string = value[4]
  const sixthNumber: string = value[5]

  // esta rotina tem 3 divisões( 4, 5 ou 6  caracteres)
  // 1 a 9 mil 10 mil a 99 mil e 100 a 999 mil

  //9.999
  if (len == 4) {

    const hundred = secondNumber + thirdNumber + fourthNumber
    if (firstNumber !== '1') {
      result = unit(firstNumber) + ' mil '
    } else {
      result = 'mil '
    }

    if (thirdNumber + fourthNumber == '00') {
      result += 'e '
    }

    result += handlerHundred(hundred)

  }

  // 99.999
  if (len == 5) {
    const hundred: string = thirdNumber + fourthNumber + fifthNumber
    
    result = ten(firstNumber + secondNumber) + ' mil ' 

    if (fourthNumber+fifthNumber == '00') {
      result += 'e '
    }
    
    result +=handlerHundred(hundred)

  }

  //999.999 -  // em DESENVOLVIMENTO
  if (len == 6) {
    const thundred: string = fourthNumber + fifthNumber + sixthNumber
    const newValue: number = parseInt(firstNumber + "00")
    
    result = hundred(firstNumber+secondNumber+thirdNumber)

    result += ' mil ' 
    
    if (fourthNumber + fifthNumber + sixthNumber !== '000') {
      if(fifthNumber + sixthNumber=='00'){
        result += 'e '
      }
    }

    result += handlerHundred(thundred)

  }

  return result

}


// tratar as centenas
function handlerHundred(value: string): string {
  const newValue = parseInt(value)

  if (newValue > 0) {
    if (newValue > 99) {
      return hundred(newValue.toString())
    } else if (newValue < 20) {
      return 'e ' + tValue[newValue]
    } else {
      return 'e ' + ten(newValue.toString())
    }
  }
  return ''
}


