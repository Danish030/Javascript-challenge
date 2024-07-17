
const call = (fn,times) => {
    for (let i = 0; i < times; i++) {
        fn()
        
    }
}

function hello () {
    console.log('hello javascript')
}

call(hello , 3)