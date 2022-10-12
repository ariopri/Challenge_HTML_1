const JavascriptArray = require('./script.js');
describe('Javascript Array', function () {
    it('should return a string', function () {
        let fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits = fruits.toString();
        expect(fruits).toEqual('Banana,Orange,Apple,Mango');
    });

    it('should return a join string', function () {
        let fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits = fruits.join(' * ');
        expect(fruits).toEqual('Banana * Orange * Apple * Mango');
    });
    it('should return a pop string', function () {
        let fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.pop();
        expect(fruits).toEqual(['Banana', 'Orange', 'Apple']);
    });
    it('should return a concat string', function () {
        let fruits = ["Banana", "Orange", "Apple", "Mango"];
        let fruits2 = ["Papaya", "Peach", "Pear"];
        const newArray = [];
        const joinArray = newArray.concat(fruits, fruits2);
        expect(joinArray).toEqual(['Banana', 'Orange', 'Apple', 'Mango', 'Papaya', 'Peach', 'Pear']);
    });
    it('should return a splice string', function () {
        let fruits = ["Banana", "Orange", "Apple", "Mango"];
        const spliceArray = fruits.splice(2, 0, "Lemon", "Kiwi");
        expect(spliceArray).toEqual([]);
    });
    it ('should return a arrow function', function () {
        let user = [
            {firstName: "John", lastName: "Doe", age: 25},
            {firstName: "Jane", lastName: "Doe", age: 20},
            {firstName: "John", lastName: "Smith", age: 30},
         ]
         const users = user.find(user => user.firstName === "John" && user.lastName === "Smith");
         expect(users).toEqual({firstName: "John", lastName: "Smith", age: 30});
    });
});



