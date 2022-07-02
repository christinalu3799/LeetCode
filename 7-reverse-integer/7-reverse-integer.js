/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let number = x.toString();
    let result = '';
    
    // Need to check if number is negative
    if(x<0){
        for(let i=number.length-1; i > 0; i--) {
        result+=number[i];
        }
        result*= -1;
        console.log(result);
    } else {
        for(let i=number.length-1; i >= 0; i--) {
        result+=number[i];
        console.log(result);
        }
    }
    
    // Set up bounds
    let min = (-2)**31;
    let max = 2**31 -1;
    if(parseInt(result)>=min && parseInt(result)<=max){
        return result;
    } else return 0;
    
};