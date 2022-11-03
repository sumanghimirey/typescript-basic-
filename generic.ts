// create generic fucntion return type with using simple state existing function

//tuple with react useState method  

//Functions Generic

function createSimpleState<T> (initial:T):[() => T, (v:T)=> void] {
    let str:T = initial;
    return [
        ()=> str,
        (v:T) => {
            v = str 
        }
    ]
}

const [state, SetState] =  createSimpleState(10)  // function returns now number
console.log(state())
SetState(20)
console.log(state())
const [anotherState, setAnotherState] = createSimpleState<string | null> (null)  // function now returns as string and null . 
console.log(anotherState())
setAnotherState("string")
console.log(anotherState())



//another example of generic 
// Interface Generic

interface rankitem <RankItem>{
    item: RankItem;
    rank: number;
}
                                    
function ranker<RankItem>(items:RankItem[], rank:(v:RankItem)=>number):RankItem[]
 {
    const ranks :rankitem<RankItem>[] = items.map((item)=>({
            item,
            rank:rank(item)
        }))

    ranks.sort((a,b)=>a.rank-b.rank)

    return ranks.map((rank) => rank.item)
 }

 //Generic with keyOf

 function pluckItems <DataType, Keytype extends keyof DataType>(  
    items:DataType[],
     key:Keytype
    ): DataType[Keytype][] {
        return items.map((item)=>item[key])
 }

 const dogs = [
    {
        name:"mimi", age : 12 
    },
    {
        name:"akira", age:13
    }
 ]
 console.log(pluckItems(dogs, 'age')) // return [12,13]
 console.log(pluckItems(dogs, 'name')) //return ['mimi','akira']
