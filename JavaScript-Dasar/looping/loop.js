// for (let i = 0; i < 11; i++ ){
//     console.log("iterasi ke- " +i)
// }

// let i = 20;
// while (i > 0 ) {
//     console.log("lari....")
//     i--;
// };

// let angka = 10;
// do {
//   console.log("Jalan sekali");
// } while (angka < 10); // Kondisi salah, tapi tetap jalan sekali

// for...of pada Array
const buah = ["Apel", "Mangga", "Jeruk"];

buah.push("chery");
buah.unshift("durian");

for (const item of buah) {
  console.log(item);
}