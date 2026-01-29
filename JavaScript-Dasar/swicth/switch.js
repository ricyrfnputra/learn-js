const nilai = "A";


switch (nilai){
    case "A":
        document.writeln("<p>Selamat anda LULUS dengan baik</p>")
    break;

    case "B":
    case "C": 
        document.writeln("<p>Selamat anda LULUS</p>")
    
    break;

    case "D": 
        document.writeln("<p>Anda belum lulus</p>")
    break;
    default:
        document.writeln("<p>Mungkin anda salah jurusan</p>")
}