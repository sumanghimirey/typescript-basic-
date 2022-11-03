
let username:string = "suman";  //string type

username += " Ghimire"

let hasLoggedIn:boolean = true; //boolean type

let myNumber:number = 34; //number type

let myRegex:RegExp = /bar/  // regex type 

const names:string[] = username.split(" "); // array type

const myNumbers: Array<number> = [1,3,4,5]  // array in generic type

const myObjects:{
    first:string
    last:string
} = {
    first: 'suman',
    last: 'ghimire'
}  //object type 

interface myObject {first:string, last:string}   // interface 
const myObjectswithInterface:myObject = {first:'suman', last:'ghimire'}  // my object with interface

const ids:Record<number, string> = {
    10:"a",
    20: "b"
}                                                       //record utility type where key are expecting as numnber and value as string

//and we can assing another record again

ids[30] = "c";
 

