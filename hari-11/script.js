const inputTugas = document.getElementById("input-tugas");
const tombolTambah = document.getElementById("tombol-tambah");
const daftarTugas = document.getElementById("daftar-tugas");

tombolTambah.addEventListener("click", function() {
    const teksTugas = inputTugas.value;

    if (teksTugas === "") {
        alert("Harap masukkan tugas!");
        return;
    }

// 1. Ciptakan wadah baris <li>
const itemBaru = document.createElement("li");

// 2. Ciptakan <span> khusus untuk teks tugas (agar bisa dicoret saat diklik)
const teksSpan = document.createElement("span");
teksSpan.textContent = teksTugas;
teksSpan.addEventListener("click", function() {
    teksSpan.style.textDecoration = "line-through";
    teksSpan.style.color = "gray";
});

// 3. Ciptakan tombol hapus
const tombolHapus = document.createElement("button");
tombolHapus.textContent = "Hapus";
tombolHapus.className = "tombol-hapus";
tombolHapus.addEventListener("click", function() {
    itemBaru.remove(); // Menghapus seluruh baris <li> ini
});

// 4. Gabungkan teks dan tombol hapus ke dalam <li>, lalu tampilkan ke layar
itemBaru.appendChild(teksSpan);
itemBaru.appendChild(tombolHapus);
daftarTugas.appendChild(itemBaru);

inputTugas.value = "";
});

inputTugas.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        tombolTambah.click();
    }
});