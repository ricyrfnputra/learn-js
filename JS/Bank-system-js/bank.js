    let saldo = prompt("Masukan saldo lu");

    const cek = document.getElementById("cek-saldo");
    const tarik = document.getElementById("tarik-tunai");
    const setor = document.getElementById("setor-tunai");
    const batal = document.getElementById("batal");


    cek.addEventListener("click", () => {
        alert(`Saldo lu sekarang adalah: Rp ${saldo.toLocaleString('id-ID')}`);
    });

    setor.addEventListener("click", () => {
        const jumlahStor = parseInt(prompt("Lu mau setor berape?"));

        if(!isNaN(jumlahStor) && jumlahStor > 0) {
            saldo += jumlahStor;
            alert(`setor tunai berhasil! saldo lu sekarang: Rp ${saldo.toLocaleString('id-ID')}`);
        } else {
            alert("Input gak valid.");
        }
    });

    tarik.addEventListener("click", () => {
        const jumlahTarik = parseInt(prompt("mau narik berape lu? "));

        if(isNaN(jumlahTarik) || jumlahTarik < 0){
            alert("input tidak valid");
        } else if (jumlahTarik > 0) {
            saldo -= jumlahTarik;
            alert(`saldo anda sekarang sebesar: Rp ${saldo.toLocaleString('id-ID')}`);
        } else {
            alert("input salah")
        };
    });

    batal.addEventListener("click", () => {
        alert("transaksi dibatalkan, terimakasih sudah menggunakan layanan kami");
    });



