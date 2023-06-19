import { tValue } from "../constants/constants";

export function unit(value:string):string{
  
  const newValue:number = parseInt(value)
  return tValue[newValue]
  
}