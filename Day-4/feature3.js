function patternPrinting(n) {
    for (let row = 1; row <= n; row++) {
        // outer loop for row
        let star = "";
        for (let col = 1; col <= row; col++) {
          // for printing star
          star += "*";
        }
        console.log(star);
      }
}

patternPrinting(15)