//Readonly 

interface Cat {
    name: string,
    breed: string
}

type ReadOnlyCat = Readonly<Cat>
const MakeCat = (name:string, breed:string):ReadOnlyCat => {
    return {
        name,
        breed
    }
}

const newCat = MakeCat('usi','germanshepart');
    newCat.name = 'suman';  // now no logner change the name of the cat.


const MakeCordinate = (x:number, y:number, z:number):readonly[number,number,number] => {
    return [x,y,z];
}

const Cordinate = MakeCordinate(10,20,30)
    Cordinate[0] = 50;


const ReallyConst = [10,20,10] as const;
    ReallyConst[0] = 30;

