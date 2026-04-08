// Tanpa ternary JS 
const value = 50;
let say;

if(value >= 75) {
    say = " Selamat anda lulus ";
} else {
    say = " Belajar lagi ya ";
}

document.writeln(`<p>${say}</p>`);



// Pakai ternary
const nilai = 70;
const ucapan = nilai >= 50 ? "selamat anda lulus" : "silahkan coba lagi";

document.writeln(`<p>${ucapan}</p>`);


