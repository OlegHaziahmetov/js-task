



let users = [
    { name: "John", age: 18, surname: "Johnson" },
    { name: "Pete", age: 20, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];


function byField(field) {
  if (field == 'name') {
    return  function compareNumeric(a, b) {
        if (a.name > b.name) return 1;
        if (a.name == b.name) return 0;
        if (a.name < b.name) return -1;
      }
  }

  if (field == 'age') {
    return  function compareNumeric(a, b) {
        if (a.age > b.age) return 1;
        if (a.age == b.age) return 0;
        if (a.age < b.age) return -1;
      }
  }

}  

//(a, b) => a.name > b.name ? 1 : -1

users.sort(byField('name'));


for (let i = 0; i < users.length; i++) {
  console.log(`${users[i].name}  ${users[i].age}`);
}; // 

users.sort(byField('age'));


for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].name}    ${users[i].age}`);
  }; // 

  
  
 
  