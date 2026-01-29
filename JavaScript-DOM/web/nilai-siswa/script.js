
const elNama = document.getElementById('inputNama');
const elNilai = document.getElementById('inputNilai');
const btnTambah = document.getElementById('btnTambah');
const tabel = document.getElementById('tabelSiswa');

let daftarSiswa = [];

btnTambah.addEventListener('click', function() {
    const nama = elNama.value;
    const nilai = parseInt(elNilai.value); 


    
    let adaAngka = false;
    for (let i = 0; i < nama.length; i++) {
        if (nama[i] !== " " && !isNaN(nama[i])) {
            adaAngka = true;
            break;
        }
    }

    if (!nama || adaAngka) {
        alert("Nama tidak valid! (Harus huruf dan tidak boleh kosong)");
        return;
    }


    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
        alert("Nilai harus angka antara 0 - 100!");
        return;
    }


    
    let statusSiswa = "";
    if (nilai >= 75) {
        statusSiswa = "Lulus";
    } else {
        statusSiswa = "Remedial";
    }

    const siswaBaru = {
        nama: nama,
        nilai: nilai,
        status: statusSiswa
    };


    daftarSiswa.push(siswaBaru);

    tampilkanData();
    elNama.value = "";
    elNilai.value = "";
});


function tampilkanData() {
    tabel.innerHTML = ""; 

    daftarSiswa.forEach((item) => {
 
        const baris = document.createElement('tr');
        
        baris.innerHTML = `
            <td>${item.nama}</td>
            <td>${item.nilai}</td>
            <td>${item.status}</td>
        `;
        
        tabel.appendChild(baris);
    });
}