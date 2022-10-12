const javascriptFunction = require('./script');
describe('Javascript Function', function () {
    it('should return a function', function () {
        const p1 = 5;
        const p2 = 10;
        const result = p1 * p2;
        expect(result).toEqual(50);
    });
    it('should return a multipleFunction', function () {
        const p1 = 4;
        const p2 = 12;
        const result = p1 * p2;
        expect(result).toEqual(48);
    });
    it('should return a myFunction2', function () {
        const firstName = "John";
        const lastName = "Doe";
        const email = "madara@gmail.com";
        const fullName = `${firstName} ${lastName}`;
        expect(fullName).toEqual('John Doe');
        expect(email).toEqual('madara@gmail.com');
    });
});

describe('Javascript Function 2', function () {
    it('should return a minFunction', function () {
        const tinggiBadan = 170;
        const minimumTinggi = 160;
        const result = tinggiBadan - minimumTinggi;
        expect(result).toEqual(10);

    });
    it('should return a getInputValue', function () {
        const name = "John Doe";
        expect(name).toEqual('John Doe');
        
    });
});