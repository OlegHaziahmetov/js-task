
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


function reverserPrintList(list) {  // с циклом
  let next = list; 
  let arr = [];
  let i = 0;
  while (next) {  
    arr[i] = next.value;    
    next = next.next;
    i++;
  }
  for (i = arr.length-1; i >= 0; i--) 
  console.log( arr[i] );

   return;
} 
  
reverserPrintList(list);

function reverserPrintList_2(list) { // с рекурсией       
  let next; 
    if (list.next != null) {
        next = list.next;
        reverserPrintList_2(next);
    }       
    
    console.log( list.value );       
  } 


reverserPrintList_2(list);

