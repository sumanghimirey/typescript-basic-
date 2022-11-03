
//simple function function return type number and each paratemer which expect also as number.
function addNumber (a:number, b:number):number {   
    return a+b
}

export default addNumber

//const type function 

export const addString = (str1:string, str2:string):string =>   `${str1} ${str2}` 

// unioun type function 

export const addParameter = (title:string, param: string | number) => `${title} ${param}` 

  //void function //void function is non returnable function .

export const printParameter = (title:string, param: string | number):void =>  { 
console.log(`${title} ${param}`)
}


 // promise return function 
export const fetchData = (url:string):Promise<string> => Promise.resolve(`Data from the ${url}`)


// rest parameter // remember rest parameter should always be last parameter of the function otherwise it throws a compile error.

export const resParameter = (salutation:string, ...names:string[]):string => {
  return `${salutation} ${names.join(', ')}`
}

//object passing function with the help of interface

interface user {
  firstname:string
  lastname:string
}

export const getName = (user:user):string => {
  return `${user.firstname} ${user.lastname} `
}



/// function with functions 

export const printFile = (fileName:string, callback:()=>void):void => {   //passing second parameter as function which return type void 
  console.log(fileName)
  callback()
}

export const arrayMutate = (numbers:number[], mutate:(v:number)=>number) : number[] => {
  return numbers.map(mutate)
}


// type in function in function 

 export type mutationFunction = (v:number) => number;

export const ArrayMutateWithType = (numbers: number[], mutate: mutationFunction) : number[] => {
  return numbers.map(mutate)
}


//functions that returns functions also known as clousure  

export type functionReturnType = (v:number)=>number
export const functionReturnsFunction = (number:number):functionReturnType => {   // const multipyReturn = functionReturnsFunction(10);   console.log(multipyReturn(2)) // return 20

  return (v:number) => number * v;
}


//function overloading;

interface Cordinate {
  x:number,
  y:number
}
// scenario to pass cordinate with different object type
export function passCordinate(x:number, y:number):Cordinate;
export function passCordinate(cordinate:Cordinate):Cordinate;
export function passCordinate(cordinate:string):Cordinate;

//implementation of the function overloading;

export function passCordinate(arg1:unknown, arg2?:unknown):Cordinate {
let cord = {
  x:0,
  y:0
}

if(typeof arg1 === 'string') {
   arg1.split(',').forEach((v) => {
    const [key, value] = v.split(":");
     cord[key as 'x' | 'y'] = parseInt(value, 10)
  })

}
else if (typeof arg1 === "object") {
  cord = {
    ...arg1 as Cordinate
  }

}
else {
  cord =  {
    x:arg1 as number,
    y: arg2 as number
  }

}

return cord;
}










