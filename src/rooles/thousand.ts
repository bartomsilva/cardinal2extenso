import { unit } from "./unit";
import { ten } from "./ten";
import { hundred } from "./hundred";

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

  if (len == 4) {
    if(firstNumber!=='1'){
      result = unit(firstNumber) + ' mil '
    } else {
      result = 'mil '
    }
    if (secondNumber + thirdNumber + fourthNumber !== '000') {
      if (secondNumber == '0' || secondNumber + thirdNumber == '00') {
        result += 'e '
      }
      result += otherValues(secondNumber + thirdNumber + fourthNumber)
    }
  }
  return result
}

// trabalhas as unidades, dezenas e centenas

function otherValues(checkNumber: string): string {

  const newValue = parseInt(checkNumber)
  let result: string = ""

  if (newValue < 10) {
    result += unit(newValue.toString())
  } else if (newValue < 100) {
    result += ten(newValue.toString())
  } else {
    result += hundred(newValue.toString())
  }
  return result
}