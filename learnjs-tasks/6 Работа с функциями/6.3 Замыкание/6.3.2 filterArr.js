
/* .. ваш код для inBetween и inArray */
function inBetween(a, b) {
  return function(c) { 
    if (a <= c && c <= b) return true;
    else return false;
  }  
}

function inArray(arr) {
  return function (c) {
    let d = false;
    for (let i = 0; i < arr.length; i++) {      
      if ( arr[i] == c ) d = true;      
    }
    return d;
  } 
} 




  

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2



  
  
 
  