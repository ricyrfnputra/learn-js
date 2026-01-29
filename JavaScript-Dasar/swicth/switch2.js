// * * * * * * * * INPUT MANUAL * * * * * * * *
// let angka1 = 10;
// let angka2 = 5;
// let operator = "/";
// let hasil;

// switch(operator){
//     case "+":
//     document.writeln(hasil = angka1 + angka2);
//     break;

//     case "-":
//     document.writeln(hasil = angka1 - angka2);
//     break;

//     case "*":
//     document.writeln(hasil = angka1 * angka2);
//     break;

//     case "/":
//     document.writeln(hasil = angka1 / angka2)
//     break;

//     default:
//     hasil = "Operator tidak dikenali";
// }

// * * * * * * * * E N D * * * * * * * *


// * * * * * * * * SIMPLE CALCULATOR * * * * * * * *

let angka1 = Number(prompt("Masukan angka pertama: "));
let operator = prompt("Masukan operator: (+, -, *, /)");
let angka2 = Number(prompt("Masukan angka kedua: "));
let hasil;

switch(operator){
    case "+":
    document.writeln(hasil = angka1 + angka2);
    break;

    case "-":
    document.writeln(hasil = angka1 - angka2);
    break;

    case "*":
    document.writeln(hasil = angka1 * angka2);
    break;

    case "/":
    
    if(angka2 == 0){
        alert("Tidak bisa membagi dengan NOL!");
    } else {
        document.writeln(hasil = angka1 / angka2);
    };
    break;

    default:
    document.writeln(hasil = "Operator tidak dikenali!");
};

// * * * * * * * * E N D * * * * * * * *


// * * * * * * * * 


