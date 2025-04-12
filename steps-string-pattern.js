//function that accepts a positive number N. the function should console log a step shape with N levels using # character. step has spaces on the right hand side.
//used nested loops

steps = (n) => {
    for (let row = 1; row <= n; row++) {
        let line = '';
        for (let col = 1; col <= n; col++) {
            if (col <= row) {
                line += '#';
            } else {
                line += ' ';
            }
        }
        console.log(line)
    }
}
steps(5);