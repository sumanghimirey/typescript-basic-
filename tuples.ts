
//Tuple example 
type ThreeDCordinate = [x:number, y:number, z:number];

function ThreeDcordinate (a:ThreeDCordinate, b:ThreeDCordinate):ThreeDCordinate {
    return [
        a[0] + b[0],
        a[1] + b[1],
        a[2] + b[2],
    ]
}

console.log(ThreeDcordinate([10,20,30],[20,30,40]))


//tuple with react useState method 

function createSimpleStringState (initial:string):[() => string, (v:string)=> void] {
    let str:string = initial;
    return [
        ()=> str,
        (v:string) => {
            v = str 
        }
    ]
}

const [getter, setter] =  createSimpleStringState("hello world")
console.log(getter())
setter("good by")
console.log(getter())