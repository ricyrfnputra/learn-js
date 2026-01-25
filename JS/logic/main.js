// Type data object
const person1 = {
    nama: "Ricy",
    umur: 17,
    jk: "lakilaki"
};

const person2 = {
    nama: "Zahra",
    umur: 18,
    jk: "perempuan"
};

const person3 = {
    nama: "Micalean",
    umur: 17,
    jk: "perempuan"
};


console.info("Kesimpulan");

let message;

// Person1 -> Person2
if(person1.umur > person2.umur){
    message = person1.nama + " Lebih tua dari " + person2.nama; 
} else if(person2.umur > person1.umur){
    message = person2.nama + " Lebih tua dari " + person1.nama;
} else {
    message = " umurnya sama aja ";
}

console.info(message);

// Person2 -> Person3
if(person2.umur > person3.umur){
    message = person2.nama + " Lebih tua dari " + person3.nama;
} else if(person3.umur > person2.umur){
    message = person3.nama + " Lebih tua dari " + person2.nama;
} else{
    message = "umurnya kalian sama"
};

console.info(message);