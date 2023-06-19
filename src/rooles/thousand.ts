import { unit } from "./unit";
import { ten } from "./ten";
import { hundred } from "./hundred";
import { checkValues } from "./checkvalues";

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
      if (secondNumber == '0' || thirdNumber+fourthNumber == '00') {
        result += 'e '
      }
      result += checkValues(secondNumber + thirdNumber + fourthNumber)
    }
  }
  if (len == 5) {

    result = ten(firstNumber+secondNumber)+ ' mil '

    if( fourthNumber + fifthNumber =='00' || thirdNumber=='0' ){
      if (thirdNumber+fourthNumber+fifthNumber !== '000'){
        result += 'e '
      } 
    }

    result += checkValues(thirdNumber + fourthNumber + fifthNumber )
   
  }
  return result
}

// trabalha as unidades, dezenas e centenas

