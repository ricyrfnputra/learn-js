const buah1 = {
    nama: "Apel",
    harga: 10000
};

const buah2 =  {
    nama: "Anggur",
    harga: 15000
}

console.info("Mari kita bandingkan");

let pesan;

if(buah1.harga > buah2.harga){
    pesan = buah1.nama + " lebih mahal dari " + buah2.nama;
} else if(buah2.harga > buah1.harga){
    pesan = buah2.nama + " lebih mahal dari " + buah1.nama; 
} else {
    pesan = "harganya sama aja tuh";
};

console.info("jadi bisa dibilang: " + pesan);


// nih coba kita bandingin di table
// daftar harga
console.table([buah1, buah2]);


// Latih type data object


// coba DOM

const fruit = {
    nama: "grape",
    price: 10000,
    stock: 5
};

document.getElementById("nama-buah").innerText = fruit.nama;
document.getElementById("harga-buah").innerText = "Rp " + fruit.price;

if(fruit.price > 7000){
    document.getElementById("harga-buah").innerHTML =style.color = "red";
} else if(fruit.price < 11000){
    document.getElementById("harga-buah")
}


