//============== coração ortográfica =============
function spellChecker(result: string): string {

  if (result.match(/^cento/) && result[6] != 'e') {
    result = result.replace('cento', 'cem')
  }
  const testMil = result.substring(0, 9)
  if (result.match(/^um mil/) && !testMil.includes("um milhão")) {
    result = result.replace(/^um/, "")
  }
  return result
}