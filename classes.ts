//create a Nosql style simple a memory database. 

//define a interface that we want in the database 

interface Database {
    get(id:string):string;
    set(id:string, value:string):void
}


//implement the class in memory databae.

class InMemoryDatabase implements Database {
    private db:Record<string, string> = {}
    get(id: string): string {
        return this.db[id];
       
    }
    set(id: string, value: string): void {
       this.db[id] = value;
    }
    
}

const myDb = new InMemoryDatabase()
myDb.set('foo', 'bar')
console.log(myDb.get('foo'))  // return bar



//Generic in classes 

interface GenericDatabase<T,K> {
    get(id:K):T;
    set(id:K, value:T):void
}


//implement the class in memory databae.

type DbKeyType = string | number | symbol

class GenericInMemoryDatabase<T, K extends DbKeyType> implements GenericDatabase<T, K> {
    private db:Record<K, T> = {} as Record<K, T>

    get(id: K): T {
        return this.db[id];
       
    }
    set(id: K, value: T): void {
       this.db[id] = value;
    }
    
}

const GenericmyDb = new GenericInMemoryDatabase<number, number>()
GenericmyDb.set(123, 123);


//create singleton in typescript 

class houselist {
    constructor (public housename:string, public houseAddress:string) {}
}


class Houses {
 private houses :houselist[] = []

 static instance:Houses = new Houses()
private constructor() {}

public addHouse (house:houselist) {
    this.houses.push('newhouse', 'america')
}

}
Houses.instance.addHouse('aotherhouse', 'another address');  // only intanciate once. 
const anotherhouses = new Houses() // cant instanceiate 

