const nilai = prompt("Masukkan Nilai")

nilai >= 1 && nilai <= 30 ? document.writeln("Nilai Anda D") :
nilai >= 31 && nilai <= 59 ? document.writeln("Nilai Anda C") :
nilai >= 60 && nilai <= 79 ? document.writeln("Nilai Anda B") :
nilai >= 80 && nilai <= 100 ? document.writeln("Nilai Anda A") :
document.writeln("Nilai Anda Salah")