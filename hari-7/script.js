const teksAngka = document.getElementById("angka");
const teksPesan = document.getElementById("pesan");
const tombolHitung = document.getElementById("tombol-hitung");
const tombolKurang = document.getElementById("tombol-kurang");
const tombolReset = document.getElementById("tombol-reset");

let hitungan = 0;

tombolHitung.addEventListener("click", function() {
    hitungan = hitungan + 1;
    teksAngka.textContent = hitungan;
    teksPesan.textContent = ""; // Hapus pesan peringatan jika ada

    // Cek apakah hitungan sudah mencapai 10
    if (hitungan >= 10) {
        teksAngka.style.color = "green";
        teksPesan.textContent = "Hebat! Target 10 tercapai!";
    }
});

tombolKurang.addEventListener("click", function() {
    // Hanya kurangi jika hitungan lebih dari 0
    if (hitungan > 0) {
        hitungan = hitungan - 1;
        teksAngka.textContent = hitungan;
        teksPesan.textContent = "";
    } else {
        teksPesan.textContent = "Angka tidak boleh kurang dari 0!";
        teksPesan.style.color = "red";
    }
});

tombolReset.addEventListener("click", function() {
    hitungan = 0;
    teksAngka.textContent = hitungan;
    teksAngka.style.color = "black";
    teksPesan.textContent = "";
});
