// 1. Tangkap elemen HTML
const inputAngka1 = document.getElementById("angka1");
const inputAngka2 = document.getElementById("angka2");
const tombolHitung = document.getElementById("tombol-hitung");
const teksHasil = document.getElementById("hasil");

// 2. Jalankan perhitungan saat tombol diklik
tombolHitung.addEventListener("click", function() {
    // Ambil nilai dari kotak input dan ubah jadi tipe angka (Number)
    const nilai1 = Number(inputAngka1.value);
    const nilai2 = Number(inputAngka2.value);

    // Hitung penjumlahan
    const total = nilai1 + nilai2;

    // Tampilkan ke layar
    teksHasil.textContent = total;
});
// Tangkap 2 tombol tambahan dari HTML
const tombolKurang = document.getElementById("tombol-kurang");
const tombolKali = document.getElementById("tombol-kali");

// 4. Perintah untuk tombol kurang (-)
tombolKurang.addEventListener("click", function() {
    // Cek dulu apakah input kosong atau tidak
    if (inputAngka1.value === "" || inputAngka2.value === "") {
        teksHasil.textContent = "Harap masukkan kedua angka!";
        return; // Hentikan eksekusi jika input kosong
    }

    const nilai1 = Number(inputAngka1.value);
    const nilai2 = Number(inputAngka2.value);
    teksHasil.textContent = nilai1 - nilai2;
});

// 5. Perintah untuk tombol kali (*)
tombolKali.addEventListener("click", function() {
    // Cek dulu apakah input kosong atau tidak
    if (inputAngka1.value === "" || inputAngka2.value === "") {
        teksHasil.textContent = "Harap masukkan kedua angka!";
        return; // Hentikan eksekusi jika input kosong
    }

    const nilai1 = Number(inputAngka1.value);
    const nilai2 = Number(inputAngka2.value);
    teksHasil.textContent = nilai1 * nilai2;
});