
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};


function printList(list) {  // с циклом
  let next = list;  
  while (next) {  
    console.log( next.value );    
    next = next.next;
  }
   return;
} 
  
printList(list);

function printList_2(list) { // с рекурсией
  let next = list;    
  console.log( next.value );
  if (next.next == null) return;
  next = next.next;
  printList_2(next);    
} 

printList_2(list);


