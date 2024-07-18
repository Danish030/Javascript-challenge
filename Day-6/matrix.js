function matrix2D (){
    let matrix=[];
let rows = 4;
let col = 5;
for (let i = 0; i < rows; i++) {
    //outer loop
    matrix[i] =[]
    for (let j = 0; j < col; j++) {
        matrix[i][j]= j*2
    }

}
console.log(matrix)
}

matrix2D()