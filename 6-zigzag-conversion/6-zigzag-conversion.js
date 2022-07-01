/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s;
    let y = 0;
    let goingDown = true;
    
    // '...' - rest/spread operator
    // read more here: https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/#:~:text=The%20main%20difference%20between%20rest,expands%20iterables%20into%20individual%20elements.
    
    const rows = [...new Array(numRows)].map(_ => []);
    
    for(let i=0; i < s.length; i++){
        // current character
        const char = s[i];
        
        rows[y].push(char);
        
        if (y === numRows -1) goingDown = false;
        if (y === 0 ) goingDown = true;
        
        y = goingDown ? y + 1 : y - 1
        
        // if(goingDown) {    
        //     // check if we're at the last row 
        //     if(y=== numRows -1) {
        //         goingDown = false;
        //         y--;
        //     } else y++; 
        // // if NOT going down:
        // } else {
        //     if(y===0) {
        //         goingDown = true;
        //         y++;
        //     } else {
        //         y--;
        //     }
        // }
    }    
    
    // convert into string with reduce function    
    return rows.reduce((string,row) => string+row.join(''),'')
};