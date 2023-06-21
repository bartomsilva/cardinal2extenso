import { tValue } from "../constants/constants"

export function checkValues(value: string): string {

  let newValue = parseInt(value)
  let result: string = ""

  if (newValue==0){
    return ""
  }
  
  if (newValue < 100) {
    if (newValue < 20) {
      result = tValue[newValue]

    } else if (value[2] === '0') {
      result = tValue[newValue]

    } else {
      result = tValue[parseInt(value[1] + '0')]
      const rest = tValue[parseInt(value[2])]
      result += rest !== 'zero' ? " e " + rest : ""
    }

  } else if (newValue < 1000) {

    // obs: quanto ao 100 (cem assume cento quando é composto )
    if (value[0] == '1' && value.includes('00')) {
      return "cem"
    }

    // pega o base das centenas
    // result = value[0]!=='0' ? tValue[parseInt(value[0] + '00')] + ' e ':""
    result = tValue[parseInt(value[0] + '00')]

    newValue = parseInt(value[1] + value[2])

    if (newValue < 100 && newValue > 0 ) {
      if(newValue>0){
        result += ' e '
      }
      if (newValue < 20) {
        result += tValue[newValue]

      } else if (value[1] === '0') {
        result += tValue[newValue]

      } else {
        result += tValue[parseInt(value[1] + '0')]
        const rest = tValue[parseInt(value[2])]
        result += rest !== 'zero' ? " e " + rest : ""
      }

    }
  }
  return result

}