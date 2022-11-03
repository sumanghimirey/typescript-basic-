//pass cordinate function overriding

interface Cordinate {
    x: number;
    y:number;
}

function parseTheCordinate(x: number, y: number) :Cordinate;
function parseTheCordinate(str: string):Cordinate;

function parseTheCordinate(obj: Cordinate): Cordinate;

function parseTheCordinate(arg1: unknown, arg2?: unknown): Cordinate {
    let cord:Cordinate = {
        x:0,
        y:0
    }
    if(typeof arg1 === 'object' ) {
        cord = {
            ...(arg1 as Cordinate)
        }
    }
    else if (typeof arg1 === 'number') {
        cord = {
            x: arg1 as number,
            y: arg2 as number
        }
    }

    else if (typeof arg1 === 'string') {
        (arg1 as string).split(',').forEach((str => {
            const[key, value] = str.split(':')
            cord[key as 'x' | 'y'] = parseInt(value, 10)
        }))
    }

    
    return cord;
}