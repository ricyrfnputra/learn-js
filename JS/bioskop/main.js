const judulFilm = {
    judul: "Si cantik milik si ganteng",
    harga: 30000,
    rateUmur: 21 
};

const person1 = {
    nama: "Zahra",
    umur: 25,
    saldo: 100000,
    isMember: false
};

console.info("Selamat datang di bioskop yang keren ini");

if(person1.umur >= judulFilm.rateUmur){
    let hargaAkhir = judulFilm.harga;

    if(person1.isMember){
        hargaAkhir = hargaAkhir - (hargaAkhir * 0.15);
        console.info("kamu dapat potongan harga 15% nih")
    } else {
        console.info("kamu gak member")
    }

    if(person1.saldo >= hargaAkhir){
        let sisaSaldo = person1.saldo - hargaAkhir;
        console.info(`Tiket ${judulFilm.judul} berhasil dibeli`)
        console.info(`Sisa saldo lu tinggal ${sisaSaldo}`)
    } else {
        console.info("saldo lu kurang ege");
    }
} else {
    console.info("Umur lu belum cukup dek")
};


