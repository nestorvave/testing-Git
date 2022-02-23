console.log(5+5)

function getSmaller(a,b) {
    return Math.min(a,b)
}
console.log(getSmaller(7,1));

function getGreater(a,b) {
    return Math.max(a,b)
}

console.log("msg")
console.log("2nd message")

const secondPower=(n)=>{
    return Math.pow(n,2)
}
console.log(secondPower(5));

/////////////
function sayHello (user){
    return console.log( `hello ${user}`)
}

sayHello("Nestor")


/////////////

function round (value1){
    return console.log( Math.round(value1))
}

round (5.51)

const getSquare = (n)=>{
    return console.log(`Result ${Math.sqrt(n)}`)
}

getSquare(9)