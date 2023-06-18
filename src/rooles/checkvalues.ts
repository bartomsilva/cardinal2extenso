import { unit } from "./unit"
import { ten } from "./ten"
import { hundred } from "./hundred"
import { thousand } from "./thousand"

export function checkValues(checkNumber: string): string {

  const newValue = parseInt(checkNumber)
  let result:string = ""

  if (newValue < 10) {
    if( newValue>0)
    result = unit(newValue.toString())

  } else if (newValue < 100) {
    result = ten(newValue.toString())

  } else if (newValue < 1000){
    result = hundred(newValue.toString())

  } else if (newValue < 100000){
    result = thousand(newValue.toString())
  }
  return result
}