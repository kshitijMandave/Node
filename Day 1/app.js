console.log("Day 1, Welcome to NodeJS");
console.log("-------***-------");

// the program which is accepting arguments with parameters and helping to print the input fruits
function fruits(...items) {
  console.log(items);
}

// here we are calling the function with input fruits values
// ... this is the restparameter whenever we want to give more than one orguments we use **Reastparameter. it creates one array with all the input values, we call it as a elements of Array
fruits("Apple", "Orange", "Banana");
