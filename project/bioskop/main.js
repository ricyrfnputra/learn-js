const judulFilm = {
  judul: "Si cantik milik si ganteng",
  harga: 30000,
  rateUmur: 21,
  kursiTersedia: ["A1", "A2", "B1", "B2", "C1", "C2"],
};

const person1 = {
  nama: "Zahra",
  umur: 25,
  saldo: 100000,
  isMember: false,
  pilihanKursi: "B1",
};

const person2 = {
  nama: "Ricy",
  umur: 25,
  saldo: 25000,
  isMember: true,
  pilihanKursi: "B2",
}

console.info("Selamat datang di bioskop yang keren ini");

if (person2.umur >= judulFilm.rateUmur) {
  let hargaAkhir = judulFilm.harga;

  if (person2.isMember) {
    hargaAkhir = hargaAkhir - (hargaAkhir * 0.15);
    console.info("kamu dapat potongan harga 15% nih");
  } else {
    console.info("kamu gak member");
  }

  // Cek kursi
  if(judulFilm.kursiTersedia.includes(person2.pilihanKursi)){

    if(person2.saldo >= hargaAkhir){

        let sisaSaldo = person2 - hargaAkhir;

        console.info(" * * * * * * * TICKET * * * * * * * ");
        console.info("* * *STATUS: PEMBAYARAN BERHASIL* * *");
        console.info(`Tiket     : ${judulFilm.judul}`);
        console.info(`Kursi     : ${person1.pilihanKursi}`);
        console.info(`Total     : Rp.${hargaAkhir}`);
        console.info(`Sisa saldo: Rp.${sisaSaldo}`);
        console.info(" * * * * * * * * * * * * * * * * * ");
    } else {
        console.info(`Duit lu cuma ${person2.saldo} kaga cukup kocak`);
    }
  } else {
    console.info(`GAGAL: Sorry, kursi ${person2.pilihanKursi} sudah dipesan orang lain`)
  }
} else {
    console.info(`Umur kamu baru ${person2.umur} jadi gak boleh masuk`)
};
