function logicalandComparison(a,b) {
    let greaterThan = a>b; 
    let lessThan = a>b; 
    let equalTo = a==b; 
    let greaterThanEqualto = a>=b; 
    let lessThanEqualto = a<=b; 
    let equality = a===b; 

    let and = a>b && a<b
    let or = a>b || a<b;
    let not = !(a<1)


    console.log("greaterThan",greaterThan)
    console.log("lessThan",lessThan)
    console.log("equalTo",equalTo)
    console.log("greaterThanEqualto",greaterThanEqualto)
    console.log("lessThanEqualto",lessThanEqualto)
    console.log("equality",equality)
    console.log("not",not)
}

logicalandComparison(7,1)