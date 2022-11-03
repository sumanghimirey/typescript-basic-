

type mutationFunction = (v:number) => number;

function mutateArray(numbers:number[], mutate:mutationFunction ):number[] {
    return numbers.map(mutate);
}

const numbers = [1,2,5];
const myMutationFunction:mutationFunction = (v:number) => v * 100;
console.log(numbers, myMutationFunction);
 
