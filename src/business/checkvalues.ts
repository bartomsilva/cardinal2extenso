import { tValue } from "../constants/constants"

export function checkValues(value: string): string {
 
  const regex = /^[0-9]+$/;

  let newValue = parseInt(value)

  if (newValue === 0 || newValue === undefined || newValue == null) {
    return ""
  }

  let result: string = ""

  // eliminação dos zeros a esquerda
  if (value[0] === '0') {
    if (value[1] === "0") {
      value = value[2]
    } else {
      value = value[1] + value[2]
    }
  }

  // de 1 a 19 e centenas fechadas
  if (newValue < 20 || value.includes('00')) {
    result = tValue[newValue]

  // de 20 a 99 e centenas não fechadas  
  } else {
    let rest: string = ""

    // centenas não fechadas
    if (value.length === 3) {
      result = tValue[parseInt(value[0] + '00')] 
      rest += checkValues(value[1] + value[2])
    
    // dezenas de 20 a cima
    } else {
      result = tValue[parseInt(value[0] + '0')]
      rest = tValue[parseInt(value[1])]
    }
    result += rest !== 'zero' ? " e " + rest : ""
  }
  return result
}