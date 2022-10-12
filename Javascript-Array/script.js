function JavascriptArray() {
  let fruits = ["Banana", "Orange", "Apple", "Mango"];
  let fruits2 = ["Papaya", "Peach", "Pear"];

  console.log(fruits.toString());
  console.log(fruits.join(" * "));

  fruits.pop();
  console.log(fruits);

  const newArray = [];
  //   const joinArray = newArray.concat(fruits, fruits2);
  //   console.log(joinArray);

  //ES6
  const joinArray = [...fruits, ...fruits2];
  console.log(joinArray);

  //splice
    const spliceArray = fruits.splice(2, 0, "Lemon", "Kiwi");
    console.log(spliceArray);

 //Arrow Function
 let user = [
    {firstName: "John", lastName: "Doe", age: 25},
    {firstName: "Jane", lastName: "Doe", age: 20},
    {firstName: "John", lastName: "Smith", age: 30},
 ]
 const users = user.find(user => user.firstName === "John" && user.lastName === "Smith");
 console.log(users);

}

module.exports = JavascriptArray;
