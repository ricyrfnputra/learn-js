function hitungBMI(){
    const berat = Number(document.getElementById("BeratBadan").value)
    const tinggiCm = Number(document.getElementById("TinggiBadan").value)
    const tinggiM = tinggiCm / 100
    const bmi = berat / (tinggiM * tinggiM)
    const kategori = bmi < 18.5 ? "Kurus" 
                : bmi < 25 ? "Normal"
                : bmi < 30 ? "Gemuk"
                : "obesitas"
    document.getElementById("outputBMI").textContent = `BMI: ${bmi.toFixed(1)} (${kategori})`;
}