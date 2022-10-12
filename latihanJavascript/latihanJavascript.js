function latihanJavascript() {
  let firstname = "Udin";

  if (firstname == "Udin") {
    console.log("Hello Udin");
  } else {
    console.log("Hello Budi");
  }

  let boolean = true;

  boolean == true ? console.log("Benar") : console.log("Salah");

  let number = 10;

  for (let i = 0; i < number; i++) {
    i % 2 == 0
      ? console.log("Genap")
      : i % 2 == 1
      ? console.log("Ganjil")
      : console.log("Salah");
  }

  // else if ternary operator

  let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "B"];

  for (let j = 0; j < angka.length; j++) {
    angka[j] % 2 == 0
      ? console.log("Genap")
      : angka[j] % 2 == 1
      ? console.log("Ganjil")
      : console.log("Salah");
  }

  // const nilai = prompt("Masukkan Nilai")
  // console.log(nilai)
  const nilai = prompt("Masukkan Nilai");
  const reg = new RegExp("^[0-9]+$");
  console.log(reg.test(nilai));
  if (reg.test(nilai) == false) {
    alert("Nilai Harus Angka");
  } else {
    nilai >= 1 && nilai <= 30
      ? document.writeln("Nilai Anda D")
      : nilai >= 31 && nilai <= 59
      ? document.writeln("Nilai Anda C")
      : nilai >= 60 && nilai <= 79
      ? document.writeln("Nilai Anda B")
      : nilai >= 80 && nilai <= 100
      ? document.writeln("Nilai Anda A")
      : alert("Nilai Harus 1 - 100");
  }
}

module.exports = latihanJavascript;
