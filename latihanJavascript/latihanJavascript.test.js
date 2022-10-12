const latihanJavascript = require('./latihanJavascript.js');
describe('Javascript Latihan',  () => {
    it('should return string', () => {
        let firstname = "Udin";
        expect(firstname).toBe("Udin");
    });
    it('should return boolean', () => {
        let boolean = true;
        expect(boolean).toBe(true);
    });
    it('should return number even or odd', () => {
        let number = 10;
        for (let i = 0; i < number; i++) {
            i % 2 == 0
            ? console.log("Genap")
            : i % 2 == 1
            ? console.log("Ganjil")
            : console.log("Salah");
        }
        expect(number).toBe(10);
    });
    it('should return number even or odd ternary operator', () => {
        let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "B"];
        for (let j = 0; j < angka.length; j++) {
            angka[j] % 2 == 0
            ? console.log("Genap")
            : angka[j] % 2 == 1
            ? console.log("Ganjil")
            : console.log("Salah");
        }
        expect(angka).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "B"]);
    });
});