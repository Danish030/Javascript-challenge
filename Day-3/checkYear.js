function isLeapyear(year) {
    if (year%4 == 0 && year % 100 != 0) {
        console.log("its a Leap year")
    }
    else {
        console.log("it's not a leap year")
    }
}

isLeapyear(2025)