# ⭐ Belajar Huruf & Angka

Aplikasi web edukasi interaktif untuk anak-anak belajar menulis huruf (A–Z), angka (0–9), serta berlatih penjumlahan dan pengurangan — semuanya dalam satu file HTML tunggal, tanpa perlu instalasi apa pun.

## Cara Menjalankan

Cukup buka file `index.html` di browser (Chrome, Safari, Edge, dll). Bisa dijalankan secara offline langsung dari file, atau di-upload ke hosting statis mana pun.

## Fitur

### 🔤 Belajar Huruf (A–Z)
- Menampilkan huruf besar & kecil dengan garis putus-putus untuk dijiplak memakai jari (di HP/tablet) atau mouse.
- Setiap huruf disertai contoh kata + emoji (misalnya **A**yam 🐔) dan panduan cara mengucapkannya.
- Tombol suara membacakan cara pengucapan huruf.
- Progres coretan dideteksi otomatis — saat huruf selesai dijiplak dengan cukup baik, muncul animasi perayaan (confetti + pop-up "Kamu Pintar!").

### 🔢 Belajar Angka (0–9)
- Mekanisme sama seperti huruf: jiplak angka mengikuti garis putus-putus.
- Setiap angka disertai kata bilangan dan ilustrasi jumlah emoji (misalnya angka 3 = 🍎🍎🍎).

### ➕ Belajar Penjumlahan
- Soal penjumlahan acak yang **tidak terbatas jumlahnya**.
- Tingkat kesulitan naik bertahap setiap 20 soal: soal 1–20 pakai angka 1–10, soal 21–40 pakai 1–20, soal 41–60 pakai 1–30, dan seterusnya (+10 setiap kenaikan level).
- Jawaban diketik lewat papan angka besar (bukan keyboard bawaan perangkat) agar lebih ramah anak.
- Jawaban benar → lanjut ke soal berikutnya. Jawaban salah → kolom jawaban otomatis dikosongkan dan anak bisa mencoba lagi.
- Ada suara "Hebat, jawaban benar" / "Jawaban salah" di setiap pengecekan.

### ➖ Belajar Pengurangan
- Sama seperti mode penjumlahan (soal tanpa batas, level naik tiap 20 soal, papan angka, suara, pop-up hasil).
- Soal dijamin **tidak menghasilkan angka negatif** (angka pengurang selalu lebih kecil atau sama dengan angka yang dikurangi).

### 🎨 Alat Bantu Menulis
- Pilihan warna pena (4 warna + color picker bebas).
- Tombol "Bersihkan" untuk menghapus coretan dan mengulang.
- Navigasi "Sebelumnya" / "Berikutnya" untuk berpindah antar huruf/angka.
- Kolom nama anak (opsional) di layar awal untuk sapaan yang lebih personal.

## Struktur Teknis

Semua kode (HTML, CSS, JavaScript) berada dalam satu file `index.html`:
- Konten dasar (data huruf `LETTERS` dan angka `NUMBERS`, logika canvas menjiplak, deteksi progres coretan, animasi perayaan) ada di bagian utama file.
- Mode **Penjumlahan** dan **Pengurangan** ditambahkan sebagai blok terpisah (`<style>` + markup + `<script>`) menjelang akhir file, masing-masing dengan namespace fungsi sendiri (`add*` dan `sub*`) agar tidak bentrok.
- Tidak ada dependensi eksternal selain Google Fonts (Baloo 2 & Nunito) yang dimuat via CDN — jadi tetap butuh koneksi internet untuk font, tapi seluruh logika aplikasi berjalan sepenuhnya di sisi klien (tanpa backend/server).

## Kompatibilitas

- Mendukung input mouse maupun sentuhan (touch) untuk menjiplak huruf/angka.
- Suara (Text-to-Speech) menggunakan Web Speech API bawaan browser (`speechSynthesis`) dengan bahasa Indonesia (`id-ID`) — kualitas suara tergantung dukungan browser/perangkat.
