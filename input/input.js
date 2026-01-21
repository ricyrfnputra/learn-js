// 1. Ambil elemen-elemennya dari HTML
const inputHarga = document.getElementById('inputHarga');
const tombol = document.getElementById('tombolCek');
const displayHasil = document.getElementById('hasil');

// 2. Tunggu tombol diklik (Event Listener)
tombol.addEventListener('click', function() {
    
    // 3. Ambil NILAI (value) dari input dan ubah jadi Angka
    let harga = Number(inputHarga.value);
    let pesan = "";

    // 4. Logika If-Else
    if (harga >= 500000) {
        let hargaDiskon = harga * 0.9; // Diskon 10%
        pesan = "Diskon 10%! Jadi: " + formatRupiah(hargaDiskon);
    } else if (harga > 0) {
        pesan = "Harga Normal: " + formatRupiah(harga);
    } else {
        pesan = "Masukkan harga yang valid!";
    }

    // 5. Tampilkan ke layar (Output ke DOM)
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