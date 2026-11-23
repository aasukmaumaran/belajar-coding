const tombolAmbil = document.getElementById("tombol-ambil");
const teksStatus = document.getElementById("status");
const teksPertanyaan = document.getElementById("pertanyaan");
const teksJawaban = document.getElementById("jawaban");

async function ambilJokeDariInternet() {
    teksStatus.textContent = "Sedang mengambil data dari server...";
    teksPertanyaan.textContent = "";
    teksJawaban.textContent = "";

    try {
        // Gabungkan domain dan jalur datanya agar tidak terpotong
        const respon = await fetch("https://v2.jokeapi.dev" + "/joke/Programming?type=twopart");
        const joke = await respon.json();

        teksStatus.textContent = "Berhasil mengambil data!";
        teksPertanyaan.textContent = joke.setup;
        teksJawaban.textContent = joke.delivery;

    } catch (error) {
        teksStatus.textContent = "Gagal mengambil data. Cek koneksi internetmu!";
        console.error(error);
    }
}

tombolAmbil.addEventListener("click", ambilJokeDariInternet);

// Otomatis ambil 1 joke saat halaman baru dibuka
ambilJokeDariInternet();
