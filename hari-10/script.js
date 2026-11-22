// 1. Tangkap elemen HTML
const inputTugas = document.getElementById("input-tugas");
const tombolTambah = document.getElementById("tombol-tambah");
const daftarTugas = document.getElementById("daftar-tugas");

// 2. Jalankan perintah saat tombol diklik
tombolTambah.addEventListener("click", function() {
   const teksTugas = inputTugas.value;

   // Cek apakah input masih kosong
   if (teksTugas === "") {
       alert("Harap masukkan tugas!");
       return; 
   }

   // Ciptakan elemen <li> baru untuk tugas
   const itemBaru = document.createElement("li");
   itemBaru.textContent = teksTugas;

   // Tambahkanfitur coret saat baris tugas diklik
   itemBaru.addEventListener("click", function() {
       itemBaru.style.textDecoration = "line-through";
       itemBaru.style.color = "gray";
   });

   // Masukkan <li> ke dalam <ul> di halaman
   daftarTugas.appendChild(itemBaru);

   //Kosongkan kembali kotak input
    inputTugas.value = "";
});