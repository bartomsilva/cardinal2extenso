//============== coração ortográfica =============
export function spellChecker(result: string): string {


  let testMil = result.substring(0, 9)
  if (result.match(/^um mil/) && !testMil.includes("um milhão")) {
    result = result.replace(/^um/, "")
  }

  testMil = result.substring(result.length-5)
  if (result.length > 6 && testMil=='cento'){
    result = result.substring(0,result.length-5)+'e cem'
  }

  result = result.replace('cento mil',"cem mil")

  return result
}