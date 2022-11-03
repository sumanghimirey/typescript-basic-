function simpleStringstate(initial_value:string):[()=>string, (v:string)=>void] {
    let str = initial_value;
    return (
        [
            ()=>str,
            (v:string)=> {
                v = str
            } 
        ]
    )
}

const[value, setValue] = simpleStringstate('helloworld');
console.log(value())
setValue('hello another world')
console.log(value())