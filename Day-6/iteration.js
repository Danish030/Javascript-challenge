let array = [1,5,7,8,9]

function iterate() {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
    
    array.forEach(print => {
        console.log(print)
    });
}

iterate()