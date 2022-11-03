// logger function that create another function 

function myLogfunction () {
    return (str:string) => {
        console.log(str)
    }
}

const my_logger = myLogfunction()
    my_logger("this is log")