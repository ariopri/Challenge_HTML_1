function javascriptFunction () {
    // Code to be executed
    let name = "";
    const p1= 5;
    const p2 = 10;

    function myFunction() {
        return p1 * p2;
    }

    function multiplyFunction(p1, p2) {
        return p1 * p2;
    }

    console.log(myFunction());
    console.log(multiplyFunction(4, 12));

    function myFunction2(firstName, lastName, email) {
        const fullName = `${firstName} ${lastName}`;
        console.log(fullName);
        console.log(email);
    }

    myFunction2({
        firstName: "John",
        lastName: "Doe",
        email: "madara@gmail.com"
    });
    
    function minFunction(p1,p2) {
        return p1-p2;
    }

    function myFunction3({
        tinggiBadan, 
        minimumTinggi,
        callback,
    }) {
        const minimumBeratBadan = callback(tinggiBadan, minimumTinggi);
        console.log(minimumBeratBadan);
    }
    myFunction3({
        tinggiBadan: 170,
        minimumTinggi: 160,
    });

    const inputName = document.getElementById("inputName");
    function getInputValue(e) {
        e.preventDefault();
        name = inputName.value;
        console.log(name);
    }

}
module .exports = javascriptFunction;

