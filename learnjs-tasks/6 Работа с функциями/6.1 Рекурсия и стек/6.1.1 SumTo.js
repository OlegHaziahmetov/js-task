//sumTo(1) = 1
//sumTo(2) = 2 + 1 = 3
//sumTo(3) = 3 + 2 + 1 = 6
//sumTo(4) = 4 + 3 + 2 + 1 = 10
//...
//sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

function sumTo_1(n) {
  let sum = 0; 
  for (let i = n; i > 0; i--) {
    sum = sum + i;   
  } return sum;
}

console.log( sumTo_1(1) );
console.log( sumTo_1(3) );
console.log( sumTo_1(100000) );

function sumTo_2(n) {
  let sum = 0; 
  if ( n <= 1) return sum + n;   
  else {    
    sum = n + sumTo_2(n-1);     
  }
  return sum; 
}  

console.log( sumTo_2(1) );
console.log( sumTo_2(3) );
console.log( sumTo_2(1000) );

function sumTo_3(n) {    
    return ((1 + n) / 2) * n; 
  }  
  
  console.log( sumTo_3(1) );
  console.log( sumTo_3(3) );
  console.log( sumTo_3(100) );

 