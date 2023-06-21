// inseri texto de ligação e / ou classe de valor
export function addText(text: string, result: string): string {

  const len = result.length
  if (result[len - 1] == " ") {
    return text + ' '

  } else {

    if (result[len - 3] + result[-2] + result[-1] !== 'mil') {
      return ' ' + text + ' '
      
    } else {
      return ''
    }
  }
  
}
