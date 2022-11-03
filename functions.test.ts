import addNumber,{addString, getName, arrayMutate, functionReturnsFunction, passCordinate} from "./functions";

console.log(addNumber(1,2))
console.log(addString('suman', 'ghimire'))

console.log(getName({firstname:"suman", lastname:"ghimire"}))

console.log(arrayMutate([1,2,3], (v:number) => {
    return 2 * v
} ))

const multipyReturn = functionReturnsFunction(10);
console.log(multipyReturn(2))

//function overloading
console.log(passCordinate(10,20))
console.log(passCordinate({x:10, y:30}))
console.log(passCordinate("x:10,y:40"))