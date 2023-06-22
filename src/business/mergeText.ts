import { addText } from "./addText"

// ============ executa o merge no texto ==============
export function mergeText(result: string, textMillion: string,
  textThosand: string, textHundred: string): string {

  // concatena os milhões 
  if (textMillion) {
    result = textMillion
    if (result.match(/^um/)) {
      result += addText('milhão', result)
    } else {
      result += addText('milhões', result)
    }
  }

  // concatena os milhares
  if (textThosand) {
    result += textThosand

    if (!textHundred) {
      result += addText('mil', result)
    }
  }

  //concatena centenas, dezenas e unidades
  if (textHundred) {

    if (textThosand) {
      result += addText('mil', result)
      if (!textHundred.includes("cento")) {
        result += addText('e', result)

      } else if (textHundred.includes('centos')) {
        result += addText('e', result)
      }
    }

  } 

  result += textHundred
  return result
}

