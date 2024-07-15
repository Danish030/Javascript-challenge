function checkGrade(grade) {
    let g; 

    switch (grade) {
        case 'A':
            g = "90-100%";
            break;
        case 'B':
            g = "80-90%";
            break;
        case 'C':
            g = "70-80%";
            break;
        case 'D':
            g = "60-70%";
            break;
        case 'E':
            g = "50-60%";
            break;
        case 'F':
            g = "Failed";
            break;
        default: 
            g = "invalid grade";
            break;
    }
    
    console.log(g); 
}

checkGrade("A")