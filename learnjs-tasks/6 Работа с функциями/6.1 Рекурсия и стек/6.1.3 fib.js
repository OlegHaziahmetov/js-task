
// 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

//alert(fib(3)); // 2
//alert(fib(7)); // 13
//alert(fib(77)); // 5527939700884757



  
function fib(n){
   // let sqr5 = 5 ** (1/2);
   // let phi = (sqr5 + 1)/ 2;
 // return (phi ** n) / sqr5 + 0.5;
  
  if ( n <= 2 ) return 1;
  let f1 = 1;
  let f2 = 1;   
  let f3 = 0;

  for (let i = 2; i < n; i++) {
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
  } return f3;
}


console.log( fib(3) );
console.log( fib(7) );
console.log( fib(77) );


 