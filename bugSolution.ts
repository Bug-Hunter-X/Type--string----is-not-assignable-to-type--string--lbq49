function greeter(person: string): string {
  return "Hello, " + person;
}

let user = "Jane Doe";
console.log(greeter(user)); //This will work correctly

//Alternatively, modify the function to handle arrays
function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}

let userArray = ["Jane", "Doe"];
console.log(greeterArray(userArray)); //This also works correctly