// = = = = = = = = = = = = = = = = = = V.01 = = = = = = = = = = = = = = = = = 
// = = = = = = = = = = = = = = ARRAY OF OBJECT = = = = = = = = = = = = = = =
// = = = = = = = = = = = CONTOH KURSI SUDAH DI AMBIL = = = = = = = = = = = 
const daftarFilm = {
    judul: "Si Cantik Milik Si Ganteng",
    harga: 30000,
    rateUmur: 21,
    kursiTersedia: ["A1", "A2", "B1", "B2"]
};


function prosesTransaksi(user, film) {
    console.log(`\n>>> Memproses pesanan: ${user.nama}...`);

    // Cukup ga umur elo
    if (user.umur < film.rateUmur) {
        return `GAGAL: Umur ${user.nama} tidak cukup.`;
    }

    if (!film.kursiTersedia.includes(user.pilihanKursi)) {
        return `GAGAL: Kursi ${user.pilihanKursi} sudah dipesan orang lain.`;
    }

    let hargaFinal = user.isMember ? film.harga * 0.85 : film.harga;

    if (user.saldo < hargaFinal) {
        return `GAGAL: Saldo ${user.nama} tidak cukup (Harga: Rp${hargaFinal}).`;
    }


    user.saldo -= hargaFinal; 
    film.kursiTersedia = film.kursiTersedia.filter(k => k !== user.pilihanKursi); // Hapus kursi

    return `BERHASIL! ${user.nama} memesan kursi ${user.pilihanKursi}. Sisa saldo: Rp${user.saldo}`;
}


const pelanggan = [
    { nama: "Zahra", umur: 25, saldo: 100000, isMember: true, pilihanKursi: "A1" },
    { nama: "Budi", umur: 15, saldo: 50000, isMember: false, pilihanKursi: "A2" }, // Contoh Gagal Umur
    { nama: "Cici", umur: 22, saldo: 10000, isMember: false, pilihanKursi: "A1" }, // Contoh Kursi sold (diambil Zahra)
];

pelanggan.forEach(p => {
    const hasil = prosesTransaksi(p, daftarFilm);
    console.log(hasil);
});

console.log("\nSisa kursi di bioskop:", daftarFilm.kursiTersedia);
// = = = = = = = = = = = = = = = END = = = = = = = = = = = = = = = = = = = 











// = = = = = = = = = = = = = = = = = V.02 = = = = = = = = = = = = = = = = = = 

const daftFilm = {
    judul: "Si Cantik Milik Si Ganteng",
    harga: 30000,
    rateUmur: 21,
    kursiTersedia: ["A1", "A2", "B1", "B2"]
};


function cetakStruk(user, film, hargaFinal) {
    const tanggal = new Date().toLocaleString('id-ID'); 
    console.log("\n===============================");
    console.log("       BIOSKOP RKA              ");
    console.log("===============================");
    console.log(`Waktu   : ${tanggal}`);
    console.log(`Nama    : ${user.nama}`);
    console.log(`Film    : ${film.judul}`);
    console.log(`Kursi   : ${user.pilihanKursi}`);
    console.log("-------------------------------");
    console.log(`Harga   : Rp${film.harga}`);
    if (user.isMember) {
        console.log(`Diskon  : Rp${film.harga * 0.15} (Member)`);
    }
    console.log(`TOTAL   : Rp${hargaFinal}`);
    console.log("-------------------------------");
    console.log("  Terima Kasih & Selamat Nonton  ");
    console.log("===============================\n");
}

function prosesTransaksi(user, film) {
    if (user.umur < film.rateUmur) {
        return `GAGAL: Umur ${user.nama} tidak cukup.`;
    }

    if (!film.kursiTersedia.includes(user.pilihanKursi)) {
        return `GAGAL: Kursi ${user.pilihanKursi} tidak tersedia.`;
    }

    let hargaFinal = user.isMember ? film.harga * 0.85 : film.harga;

    if (user.saldo < hargaFinal) {
        return `GAGAL: Saldo ${user.nama} kurang. (Butuh Rp${hargaFinal})`;
    }

    user.saldo -= hargaFinal;
    film.kursiTersedia = film.kursiTersedia.filter(k => k !== user.pilihanKursi);

    cetakStruk(user, film, hargaFinal);
    
    return `TRANSAKSI BERHASIL: Tiket ${user.nama} tercetak.`;
}

const orang = { 
    nama: "Zahra", 
    umur: 25, 
    saldo: 100000, 
    isMember: true, 
    pilihanKursi: "B1" 
};

const hasil = prosesTransaksi(orang, daftarFilm);
console.log(hasil);
// = = = = = = = = = = = END = = = = = = = = = = = 






// = = = = = = = = = = = CONTOH KURSI SUDAH DI AMBIL = = = = = = = = = = = 
let film = {
    judul: "Si Cantik Milik Si Ganteng",
    kursiTersedia: ["A1", "A2", "B1"] 
};


function prosesBooking(user, filmDipilih) {
    console.log(`\n>>> ${user.nama} mencoba memesan kursi ${user.pilihanKursi}...`);

    // Kursi masih ada di array ga?
    if (filmDipilih.kursiTersedia.includes(user.pilihanKursi)) {
        
        // Hapus kursi kalo ada, biar gak di pesan orang lain
        filmDipilih.kursiTersedia = filmDipilih.kursiTersedia.filter(k => k !== user.pilihanKursi);
        
        return `BERHASIL: Kursi ${user.pilihanKursi} untuk ${user.nama} sudah aman!`;
    } else {
        return `GAGAL: Maaf ${user.nama}, kursi ${user.pilihanKursi} sudah diambil orang lain.`;
    }
}


// Pelanggan 1: Zahra
const zahra = { nama: "Zahra", pilihanKursi: "A2" };
console.log(prosesBooking(zahra, film));

// Pelanggan 2: Budi (Ingin kursi yang sama)
const budi = { nama: "Budi", pilihanKursi: "A2" };
console.log(prosesBooking(budi, film));

// kursi yang sisa di array
console.log("\nSisa kursi yang tersedia:", film.kursiTersedia);
// ====================================================================