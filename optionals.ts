//optional parameters 

function printIngredients(quantity:string, ingredient:string, extra?:string) {
    console.log(`quantity: ${quantity} ingredients: ${ingredient} extra: ${extra ? extra : ""}`)

}

printIngredients("1 cup" ,"sugar")
printIngredients("1 cup", "salt","water")

//optionals fields 

interface User {
    id:string,
    info:{
        email?:string
    }
}

function getEmail(user:User):string {
    if(user.info) {
        return user.info.email!       // only use ! if you know better than typescript that is email will not be empty
    }
    return ""
}

function getEmailEasy(user:User):string {
    return user?.info?.email ?? ""       //optional chaining parameter 
}

// Optioanla callback 

function optioanalCallback(x:number, y:number, callback?:()=>number) {
    console.log(x,y)
    callback?.()  //optional callback invoke
}