const tombol = document.getElementById('tombolTambah');
const list = document.getElementById('listSiswa');

let dafSiswa = [];

tombol.addEventListener('click', function() {
    let nama = prompt("Masukkan nama siswa:");

    if (!nama) {
        alert("Nama tidak boleh kosong!");
        return;
    }

   
    
    let adaAngka = false;

   
    for (let i = 0; i < nama.length; i++) {
   
        if (nama[i] !== " " && !isNaN(nama[i])) {
            adaAngka = true;
            break; 
        }
    }

    if (adaAngka) {
        alert("Gagal: Nama tidak boleh mengandung angka!");
        return;
    }
    
    

    dafSiswa.push({ nama: nama });
    tampilkanSiswa();
});

function tampilkanSiswa() {
    list.innerHTML = "";
    dafSiswa.forEach((siswa) => {
        const itemBaru = document.createElement('li');
        itemBaru.textContent = siswa.nama;
        list.appendChild(itemBaru);
    });
}
