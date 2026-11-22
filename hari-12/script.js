const inputTugas = document.getElementById("input-tugas");
const tombolTambah = document.getElementById("tombol-tambah");
const daftarTugasUI = document.getElementById("daftar-tugas");

// 1. Ambil data lama dari localStorage jika ada, atau mulai dengan Array kosong[]
let semuaTugas = JSON.parse(localStorage.getItem("tugas_saya")) || [];

// 2. Fungsi khusus untuk menampilkan isi Array ke layar
function tampilkanTugas() {
    daftarTugasUI.innerHTML = ""; // Bersihkan tampilan lama agar tidak dobel

    semuaTugas.forEach(function(teksTugas, urutan) {
        const itemBaru = document.createElement("li");

        const teksSpan = document.createElement("span");
        teksSpan.textContent = teksTugas;
        teksSpan.addEventListener("click", function() {
            teksSpan.style.textDecoration = "line-through";
            teksSpan.style.color = "gray";
    });

    const tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";
        tombolHapus.className = "tombol-hapus";
        tombolHapus.addEventListener("click", function() {
            // Hapus data dari Array berdasarkan urutannya, lalu simpan ulang
            semuaTugas.splice(urutan, 1);
            simpanKeBrowser();
            tampilkanTugas();
        });

        itemBaru.appendChild(teksSpan);
        itemBaru.appendChild(tombolHapus);
        daftarTugasUI.appendChild(itemBaru);
    });
}

// 3. Fungsi untuk menyimpan Array ke dalam LocalStorage
function simpanKeBrowser() {
    localStorage.setItem("tugas_saya", JSON.stringify(semuaTugas));
}

// 4. Perintah saat tombol Tambah diklik
tombolTambah.addEventListener("click", function() {
    const teksBaru = inputTugas.value;

    if (teksBaru === "") {
        alert("Harap masukkan tugas!");
        return;
    }

    semuaTugas.push(teksBaru); // Masukkan tugas baru ke dalam Array
    simpanKeBrowser();         // Simpan ke brankas browser
        tampilkanTugas();          // Perbarui layar

    inputTugas.value = "";
});

// 5. Fitur tekan Enter
inputTugas.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        tombolTambah.click();
    }
});

// 6. Tampilkan data yang tersimpan saat halaman pertama kali dibuka
tampilkanTugas();