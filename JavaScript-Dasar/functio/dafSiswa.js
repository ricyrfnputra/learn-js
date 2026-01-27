// = = = = = = = = = = INPUT USER PAKE PROMPT UNTUK MENGUMPULKAN DATA DI DALAM ARRAY = = = == = = = = = = 

function buatDataSiswa(nama, umur, hobi, citaCita) {
    return {
        nama: nama,
        umur: Number(umur), 
        hobi: hobi,
        citaCita: citaCita
    };
}

let daftarSiswa = [];

function tambahSiswa() {
    let nama = prompt("Nama siswa:");
    let umur = prompt("Umur siswa:");
    let hobi = prompt("Hobi siswa:");
    let citaCita = prompt("Cita-Cita:");

    if (nama || umur || hobi || citaCita) { // operator agar tetap data masuk array walau salah satu data tidak di input oleh user
        const dataBaru = buatDataSiswa(nama, umur, hobi, citaCita);
        
        daftarSiswa.push(dataBaru);
        
        console.log(`Berhasil menambah ${nama}`);
        
        console.table(daftarSiswa);
    } else {
        console.log("Input dibatalkan atau data kosong.");
    }
}

tambahSiswa();

// = = = = = = = = = = END = = = == = = = = = = 