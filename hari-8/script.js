// 1. Menangkap semua elemen dari HTML
const teksAngka = document.getElementById("angka");
const teksPesan = document.getElementById("pesan");
const tombolHitung = document.getElementById("tombol-hitung");
const tombolKurang = document.getElementById("tombol-kurang");
const tombolReset = document.getElementById("tombol-reset");

// 2. Menyiapkan variabel hitungan awal
let hitungan = 0;

// 3. Perintah saat tombol hitung (+1) diklik
tombolHitung.addEventListener("click", function() {
    if (hitungan < 15) {
        hitungan = hitungan + 1;
        teksAngka.textContent = hitungan;
        teksPesan.textContent = "";

        if (hitungan >= 10) {
            teksAngka.style.color = "green";
            teksPesan.textContent = "Hebat! Target 10 tercapai!";
        }
    } else {
        teksPesan.textContent = "Batas maksimal 15 sudah tercapai!";
        teksPesan.style.color = "orange";
    }
});

// 4. Perintah saat tombol kurang (-1) diklik
tombolKurang.addEventListener("click", function() {
    if (hitungan > 0) {
        hitungan = hitungan - 1;
        teksAngka.textContent = hitungan;
        teksPesan.textContent = "";

        if (hitungan < 10) {
            teksAngka.style.color = "black";
        }
    } else {
        teksPesan.textContent = "Angka tidak boleh kurang dari 0!";
        teksPesan.style.color = "red";
    }
});

// 5. Perintah saat tombol reset diklik
tombolReset.addEventListener("click", function() {
    hitungan = 0;
    teksAngka.textContent = hitungan;
    teksAngka.style.color = "black";
    teksPesan.textContent = "";
});
