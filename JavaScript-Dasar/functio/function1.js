// = = = = = = = = = = MENAMBAH OBJECT KE DALAM ARRAY = = = == = = = = = = 

function buatSiswa(nama, umur, hobi) {
    return{
        nama: nama,
        umur: umur,
        hobi: hobi
    };
}

let daftarSiswa = [];

function tambahDaftar(nama, umur, hobi) {
    const dataBaru = buatSiswa(nama, umur, hobi)

    daftarSiswa.push(dataBaru);

    console.log(`Berhasil menambah ${nama} ke daftar`);
}

tambahDaftar("Ricy", 20, "Coding");
tambahDaftar("Nafza", 20, "Masak");

console.log(daftarSiswa);

// = = = = = = = = = = END = = = == = = = = = = 




// = = = = = = = = = = INPUT USER PAKE PROMPT UNTUK MENGUMPULKAN DATA DI DALAM ARRAY = = = == = = = = = = 

function dataSiswa(nama, umur, hobi, citaCita){
    return{
        nama, 
        umur,
        hobi,
        citaCita
    };
}

let dafSiswa = [];

function tamSiswa() {
    let nama = prompt("Nama siswa: ");
    let umur = prompt("Umur siswa: ");
    let hobi = prompt("Hobi siswa: ");
    let citaCita = prompt("Cita-Cita siswa: ");

    // Cek
    if(nama && umur && hobi) {
        const datBar = buatSiswa(nama, umur, hobi, citaCita);
        tamSiswa.push(datBar);
        console.log(`Yeayy, berhasil menambah ${nama}`);
    } else {
        console.log("Gajadi masukin data");
    }
}

tamSiswa();
console.table(dafSiswa);

// = = = = = = = = = = END = = = == = = = = = = 






