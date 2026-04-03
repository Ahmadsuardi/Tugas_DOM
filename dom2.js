// Ambil elemen DOM
let lokasiInput = document.getElementById("lokasi"); // getElementById
let tanggalInput = document.getElementById("tanggalPanen");
let tombol = document.getElementById("btnTambah");
let list = document.querySelector("#listJadwal"); // querySelector

// Event tombol
tombol.addEventListener("click", tambahJadwal);

function tambahJadwal() {
    let lokasi = lokasiInput.value;
    let tanggal = tanggalInput.value;

    if (lokasi === "" || tanggal === "") {
        alert("Data harus lengkap!");
        return;
    }

    // Buat elemen list
    let li = document.createElement("li"); // createElement
    li.innerHTML = lokasi + " - " + tanggal; // innerHTML

    // Tambah atribut
    li.setAttribute("class", "item"); // setAttribute

    // Klik = tandai selesai
    li.addEventListener("click", function () {
        li.classList.toggle("selesai"); // classList.toggle
    });

    // Tombol hapus
    let btnHapus = document.createElement("button");
    btnHapus.innerHTML = "X";
    btnHapus.setAttribute("class", "hapus");

    btnHapus.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove(); // remove
    });

    // Tambah tombol ke list
    li.appendChild(btnHapus); // appendChild

    // Tambah ke halaman
    list.appendChild(li);

    // Reset input
    lokasiInput.value = "";
    tanggalInput.value = "";
}