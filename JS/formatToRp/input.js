// DOM
const inputHarga = document.getElementById('inputHarga');
const tombol = document.getElementById('tombolCek');
const displayHasil = document.getElementById('hasil');


tombol.addEventListener('click', function() {
    
    let harga = Number(inputHarga.value);
    let pesan = "";



    if (harga >= 500000) {
        let hargaDiskon = harga * 0.9; // Diskon 10%
        pesan = "Diskon 10%! Jadi: " + formatRupiah(hargaDiskon);
    } else if (harga > 0) {
        pesan = "Harga Normal: " + formatRupiah(harga);
    } else {
        pesan = "Masukkan harga yang valid!";
    }

    displayHasil.innerText = pesan;
});

// Formater To Rupiah
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
}