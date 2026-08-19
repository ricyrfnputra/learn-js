// 1
function Mahasiswa(namaMhs, nimMhs, hobiMhs){
    this.namaMhs = namaMhs;
    this.nimMhs = nimMhs;
    this.hobiMhs = hobiMhs;
}

const ricy = new Mahasiswa("ricy", "a11.2025.16464", "mancing");
const michael = new Mahasiswa("michael", "a11.2024.17575", "riding");

document.getElementById("demo").innerHTML = "Dia adalah " + ricy.namaMhs + ", dengan NIM " +  ricy.nimMhs + ", dia mempunyai hobi " + ricy.hobiMhs + ", dia mempunyi teman bernama " + michael.namaMhs + " namun mempunyai hobi yang berbeda jauh yaitu " + michael.hobiMhs;



// 2
const andi = {
    nama: "Andi",
    nim: "A11.2023.16020",
    jurusan: "Ïnformatika"
};

console.log("Nama    : " + andi.nama);
console.log("Nim     : " + andi.nim);
console.log("jurusan : " + andi.jurusan);

// 3

const siswa = {
    nama: "Aldo",
    asal: "Semarang",
    umur: "18"
};


// 1 (Manual)
// document.getElementById("profile").innerHTML =  "Siswa dengan data berikut <br>" + 
//                                                 " Nama :   " + siswa.nama + "<br>" +
//                                                 " Umur :    " + siswa.umur + "<br>" +
//                                                 " Asal :   " + siswa.asal 

// 2 (Pake ul li)
document.getElementById("profile").innerHTML = `
    <p>Siswa dengan data berikut:</p>
    <ul>
        <li>Nama: ${siswa.nama}</li>
        <li>Asal: ${siswa.asal}</li>
        <li>Umur: ${siswa.umur}</li>
    </ul>
`;

document.getElementById("description").innerHTML = "Diharap segara melunasi pembayaran SPP!"
