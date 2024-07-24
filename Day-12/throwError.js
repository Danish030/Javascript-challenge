try{
    if(2+2 ==5);
    throw new Error ('Math Error: 2+2does not equal to 5')
}
catch (err){
    console.log(err.message)
}

function divide(a,b) {
    try{
    if(b == 0){
        throw new Error("Division by zero is not possinle")
    }
    return a/b;
} catch (err){
console.log("Error:",err.message)
}
}

console.log(divide(2,0))

// Activity 2
try{
    if(2*2 == 4)
    throw new Error ('Math Error: 2 * 2 does not equal to 5')
return true;
}
catch (err){
    console.log(err.message)
}
finally{
    console.log("task completed");
}
