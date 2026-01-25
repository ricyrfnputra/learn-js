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


// Defined object
const orang = {
    nama: "Ricy"
}; 

if(orang.nama === undefined){
    console.info("Nama belum di isi")
} else {
    console.info(`Hello ${orang.nama} selamat bergabung`)
};



// Dalam Switch

const wong1 = {
    nama: "Gabriella",
    umur: 25
};

const wong2 = {
    nama: "Zahra",
    umur: 20
};

// switch (wong.nomo){
//     case undefined:
//     case "":
//         console.info("nama belum diisi");
//         break;
//     default:
//         console.info(`Hello ${wong.nama} selamat datang`);
// }

// ! 
if(!wong1.nomo){
    console.info("Nama belum disi")
} else {
    console.info(`Hello ${wong1.nomo}`);
}


// contoh di nested

if(!wong1.umur || !wong2.umur) {
    console.info("Data umur salah satu orang belum di isi");
} else {
    // Nested if
    if(wong1.umur === wong2.umur) {
        console.info(`${wong1.nama} dan ${wong2.nama} seumuran`);
    } else {
        if(wong1.umur > wong2.umur){
            console.info(`${wong1.nama} lebih tua dari ${wong2.nama}`)
        } else {
            console.info(`${wong2.nama} lebih tua dari ${wong1.nama}`)
        }
    }
};







