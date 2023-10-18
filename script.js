//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.

//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.

//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.

//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.

//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  state: 'Punjab',
  skills: ['HTML', 'CSS', 'JS', 'React'],
};

localStorage.setItem("firstName", user.firstName);
localStorage.setItem("age", user.age);
localStorage.setItem("state", user.state);
localStorage.setItem("skills", JSON.stringify(user.skills));

const storedFirstName = localStorage.getItem("firstName");
const storedAge = localStorage.getItem("age");
const storedstate = localStorage.getItem("state")
const storedSkills = JSON.parse(localStorage.getItem("skills"));
console.log("First Name:", storedFirstName);
console.log("Age:", storedAge);
console.log("state:", storedstate);
console.log("Skills:", storedSkills);

localStorage.removeItem("state");

localStorage.clear();

const userString = JSON.stringify(user);
console.log(userString);