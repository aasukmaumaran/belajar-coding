const inputUsername = document.getElementById("input-username");
const tombolCari = document.getElementById("tombol-cari");
const pesanStatus = document.getElementById("pesan-status");
const wadahProfil = document.getElementById("wadah-profil");

// Elemen di dalam kartu hasil profil
const fotoUser = document.getElementById("foto-user");
const namaUser = document.getElementById("nama-user");
const bioUser = document.getElementById("bio-user");
const jumlahRepo = document.getElementById("jumlah-repo");
const jumlahFollower = document.getElementById("jumlah-follower");
const linkProfil = document.getElementById("link-profil");

async function cariProfilGitHub() {
    const username = inputUsername.value.trim();

    if (username === "") {
        pesanStatus.textContent = "Masukkan username GitHub terlebih dahulu!";
        wadahProfil.style.display = "none";
        return;
    }

    pesanStatus.style.color = "#64748b";
    pesanStatus.textContent = "Mencari profil...";
    wadahProfil.style.display = "none";

    try {
        // Menggunakan tanda backtick (`) untuk menyisipkan username ke dalam URL
                const respon = await fetch("https://api.github.com" + "/users/" + username);


        // Cek jika username tidak ditemukan (status 404)
        if (!respon.ok) {
            throw new Error("Username tidak ditemukan!");
        }

        const data = await respon.json();

        // Masukkan data dari server GitHub ke elemen HTML
        fotoUser.src = data.avatar_url;
        namaUser.textContent = data.name || data.login;
        bioUser.textContent = data.bio || "Pengguna ini belum menulis bio.";
        jumlahRepo.textContent = data.public_repos;
        jumlahFollower.textContent = data.followers;
        linkProfil.href = data.html_url;

        pesanStatus.textContent = "";
        wadahProfil.style.display = "block"; // Munculkan kartu profil

    } catch (error) {
        pesanStatus.style.color = "#ef4444";
        pesanStatus.textContent = error.message;
    }
}

tombolCari.addEventListener("click", cariProfilGitHub);

// Fitur tekan Enter di kotak pencarian
inputUsername.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        cariProfilGitHub();
    }
});
