let saldo = prompt("Masukan saldo anda");

const cek = document.getElementById("cek-saldo");
const tarik = document.getElementById("tarik-tunai");
const setor = document.getElementById("setor-tunai");
const batal = document.getElementById("batal");


cek.addEventListener("click", () => {
    alert(`Saldo anda sekarang adalah: Rp ${saldo.toLocaleString('id-ID')}`);
});

tarik.addEventListener("click", () => {
    const jumlahStor = parseInt(prompt("Lu mau setor berape?"));

    if(!isNaN(jumlahStor) && jumlahStor > 0) {
        saldo += jumlahStor;
        alert(`setor tunai berhasil! saldo lu sekarang: Rp ${saldo.toLocaleString('id-ID')}`);
    } else {
        alert("Input gak valid.");
    }
});

setor.addEventListener("click", () => {
    const jumlahTarik = parseInt(prompt("mau setor berape lu? "));

    if(isNaN(jumlahTarik)){

    } 


});



